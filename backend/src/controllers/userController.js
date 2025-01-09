import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import {
  sendVerifyEmailOtp,
  sendResetPasswordOtpEmail,
} from "../utils/emailUtils.js";
import { cookieOptions } from "../utils/constants.js";

const userRegistration = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with email already exist", success: false });
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    const otp = await user.createOtp();
    await sendVerifyEmailOtp(otp, email);
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    next(error);
  }
};

const verifyEmailOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const isVerified = await user.verifyOtp(otp);

    if (!isVerified) {
      return res.status(400).json({ message: "Invalid OTP", success: false });
    }
    user.isVerified = true;
    await user.save();
    const token = await user.generateToken();
    res.cookie("token", token, cookieOptions);
    res
      .status(200)
      .json({
        message: "OTP verified successfully",
        token: token,
        success: true,
      });
  } catch (error) {
    next(error);
  }
};

const sendRestPasswordOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const otp = await user.createResetPasswordOtp();
    await sendResetPasswordOtpEmail(otp, email);
    res.status(200).json({ message: "OTP sent successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// verify reset password otp
const verifyResetPasswordOtpAndRestPassword = async (req, res, next) => {
  try {
    const { otp, newPassword, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const isVerified = await user.verifyResetPasswordOtpAndResetPassword(
      otp,
      newPassword
    );
    if (!isVerified) {
      return res.status(400).json({ message: "Invalid OTP", success: false });
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Password reset successfull", success: true });
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res
        .status(401)
        .json({ message: "Incorrect password", success: false });
    }
    const token = await user.generateToken();
    res.cookie("token", token, cookieOptions);
    res.status(200).json({ token, message: "Login successful", success: true });
  } catch (error) {
    next(error);
  }
};

export {
  userRegistration,
  verifyEmailOtp,
  sendRestPasswordOtp,
  verifyResetPasswordOtpAndRestPassword,
  userLogin,
};
