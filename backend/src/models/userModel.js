import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtOptions } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: [5, "Username must be at least 5 characters long"],
      maxLength: [20, "Username must be at most 20 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },

    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
      },
    },
    emailOtp: {
      type: String,
    },
    emailOtpExpiry: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    resetPasswordOtp: {
      type: String,
    },
    resetPasswordOtpExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

//methods to hash password

//methods to compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//generate jwt token
userSchema.methods.generateToken = async function () {
  return jwt.sign({ id: this._id }, process.env.JWT_KEY , jwtOptions);
};

//methods to create otp
userSchema.methods.createOtp = async function () {
  const otp = Math.floor(1000 + Math.random() * 9000);
  const saltRounds = await bcrypt.genSalt(10);
  this.emailOtp = await bcrypt.hash(otp.toString(), saltRounds);
  // this.emailOtpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
  await this.save();
  return otp;
};

//verify otp
userSchema.methods.verifyOtp = async function (otp) {
  if (!this.emailOtp) {
    console.log("otp not found from userSchema.methods.verifyOtp ");
    return false;
  }
  const isValid = await bcrypt.compare(otp.toString(), this.emailOtp);
  if (isValid) {
    this.emailOtp = undefined;
    this.emailOtpExpiry = undefined;
    await this.save();
    return true;
  }
  return false;
};

// create reset password otp function
userSchema.methods.createResetPasswordOtp = async function () {
  const otp = Math.floor(1000 + Math.random() * 9000);
  const saltRounds = await bcrypt.genSalt(10);
  this.resetPasswordOtp = await bcrypt.hash(otp.toString(), saltRounds);
  // this.resetPasswordOtpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
  await this.save();
  return otp;
};

//verify reset password otp function
userSchema.methods.verifyResetPasswordOtpAndResetPassword = async function (
  otp,
  newPassword
) {
  if (!this.resetPasswordOtp) {
    console.log("otp not found from userSchema.methods.verifyOtp ");
    return false;
  }
  const isValid = await bcrypt.compare(otp.toString(), this.resetPasswordOtp);
  if (isValid) {
    const saltRounds = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(newPassword, saltRounds);
    this.resetPasswordOtp = undefined;
    this.resetPasswordOtpExpiry = undefined;
    await this.save();
    return true;
  }
  return false;
};

const User = mongoose.model("User", userSchema);
export default User;
