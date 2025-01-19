import Overview from "@/components/dashboardComponents/Overview";
import StatCard from "@/components/ui/card";
import ProgressBar from "@/components/ui/progressBar";
import NavBar from "@/projectcomponents/NavBar/NavBar";
import SideBar from "@/projectcomponents/SideBar";
import React, { useState, useEffect } from "react";

export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex ">
        <SideBar  />
        <div className="bg-gray-100 w-full flex justify-center">
          <Overview />
        </div>
       
      </div>
    </>
  );
}

// Reusable StatCard Component
