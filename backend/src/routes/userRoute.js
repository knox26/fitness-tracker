import {
  userRegistration,
  verifyEmailOtp,
  sendRestPasswordOtp,
  verifyResetPasswordOtpAndRestPassword,
  userLogin,
} from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", userRegistration);

//verify email otp
userRouter.post("/verify-email-otp", verifyEmailOtp);

//reser password routes
userRouter.post("/send-reset-otp", sendRestPasswordOtp);
userRouter.post("/verify-reset-otp", verifyResetPasswordOtpAndRestPassword);

//login routes
userRouter.post("/login", userLogin);

export default userRouter;
