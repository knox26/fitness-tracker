import React from "react";
import { useGymAdminStore } from "@/store/useGymAdminStore";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DashBoard from "./components/homeComponents/DashBoard";
import AdminSideBar from "./components/gym-admin/AdminSideBar";
import NavBar from "./components/gym-admin/NavBar";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";
import FergotPassword from "./pages/FergotPassword";
import VerifyOtpRegister from "./pages/VerifyOtpRegister";

export default function App() {
  const { sidebarToggle } = useGymAdminStore();
  return (
    <div className="flex w-screen ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fergotPassword" element={<FergotPassword />} />
        <Route path="/" element={<VerifyOtpRegister />} />
      </Routes>
    </div>
  );
}
