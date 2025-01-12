import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiBell, FiHome, FiSliders, FiCopy, FiUser, FiSettings, FiPower } from "react-icons/fi";

export default function DashBoard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar for mobile menu
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? "" : "hidden";
  };

  // Close sidebar on resize
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
    <div className="bg-indigo-50 min-h-screen overflow-x-hidden">
      <div
        className={`overlay fixed inset-0 bg-indigo-900/50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "hidden opacity-0"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Header */}
      <header className="fixed w-full bg-white text-indigo-800 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
          <button className="mobile-menu-button p-2 lg:hidden" onClick={toggleSidebar}>
            <FiMenu className="text-2xl" />
          </button>
          <div className="text-xl font-bold text-blue-900">
            Admin<span className="text-indigo-800">Panel</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiSearch className="p-2 text-2xl hidden md:block" />
            <FiBell className="p-2 text-2xl hidden md:block" />
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="pt-16 max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`sidebar fixed lg:static w-[240px] bg-indigo-50 h-[calc(100vh-4rem)] lg:h-auto transform transition-transform duration-300 z-45 overflow-y-auto p-4 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg mb-6 p-4">
            <MenuItem icon={<FiHome />} label="Home" />
            <MenuItem icon={<FiSliders />} label="Some menu item" />
            <MenuItem icon={<FiCopy />} label="Another menu item" />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <MenuItem icon={<FiUser />} label="Profile" />
            <MenuItem icon={<FiSettings />} label="Settings" />
            <MenuItem icon={<FiPower />} label="Log out" />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <StatCard bgColor="bg-indigo-100" title="Welcome" subTitle="Dash" />
            <StatCard bgColor="bg-blue-100" title="Inbox" subTitle="23" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatsBox delay="0.1s" title="Stats Card 1" />
            <StatsBox delay="0.2s" title="Stats Card 2" />
            <StatsBox delay="0.3s" title="Stats Card 3" />
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable MenuItem Component
function MenuItem({ icon, label }) {
  return (
    <a
      href="#"
      className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
    >
      <span className="mr-2">{icon}</span>
      {label}
    </a>
  );
}

// Reusable StatCard Component
function StatCard({ bgColor, title, subTitle }) {
  return (
    <div className={`${bgColor} border rounded-xl p-6`}>
      <h2 className="text-4xl md:text-5xl text-blue-900">
        {title} <br />
        <strong>{subTitle}</strong>
      </h2>
    </div>
  );
}

// Reusable StatsBox Component
function StatsBox({ delay, title }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 h-64 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: delay }}
    >
      <h3 className="text-xl font-bold text-indigo-800">{title}</h3>
    </div>
  );
}
