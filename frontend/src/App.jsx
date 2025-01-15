import React from "react";
import { useGymAdminStore } from "@/store/useGymAdminStore";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import DashBoard from "./components/homeComponents/DashBoard";

import NavBar from "./components/gym-admin/NavBar";

import Login from "./pages/LoginPage";
import Register from "./pages/Register";
import FergotPassword from "./pages/FergotPassword";
import VerifyOtpRegister from "./pages/VerifyOtpRegister";
import NavBar from "./projectcomponents/NavBar/NavBar";

import "./App.css";
import DashBoard from "./pages/DashBoard";
import SideBar from "./projectcomponents/SideBar";


export default function App() {
  const { sidebarToggle } = useGymAdminStore();
  return (
    <>
      <div className="h-screen w-full  dark:bg-neutral-900">
      <NavBar/>
      <SideBar/>
         <div >
          <DashBoard/>
          <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fergotPassword" element={<FergotPassword />} />
        <Route path="/" element={<VerifyOtpRegister />} />
      </Routes>
         </div>
      </div>
    </>
  );
}
