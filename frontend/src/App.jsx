import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import FergotPassword from "./pages/FergotPassword";
import VerifyOtpRegister from "./pages/VerifyOtpRegister";
import DashBoard from "./pages/DashBoard";

export default function App() {

  return (
    <>
      <div className="h-screen w-full  dark:bg-neutral-900">
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fergotPassword" element={<FergotPassword />} />
            <Route path="/otp" element={<VerifyOtpRegister />} />
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}
