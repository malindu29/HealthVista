import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { Appointment } from "../models/appointmentSchema.js";
import jwt from "jsonwebtoken";

export const loginDoctor = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || user.role !== "Doctor") {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).cookie("doctorToken", token, {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }).json({
    success: true,
    message: "Logged in successfully",
    user,
  });
});

export const getDoctorAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find({ doctorId: req.user._id });
  res.status(200).json({
    success: true,
    appointments,
  });
});