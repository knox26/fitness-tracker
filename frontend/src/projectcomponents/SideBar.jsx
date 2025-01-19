import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineThunderbolt,
  AiOutlinePlus,
  AiOutlineBarChart,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

const SideBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { href: "#overview", label: "Overview", icon: <AiOutlineDashboard /> },
    { href: "#workouts", label: "Workouts", icon: <AiOutlineThunderbolt /> },
    { href: "#nutrition", label: "Nutrition", icon: <AiOutlinePlus /> },
    { href: "#progress", label: "Progress", icon: <AiOutlineBarChart /> },
    { href: "#goals", label: "Goals", icon: <AiOutlineCheckSquare /> },
  ];

  return (
    <>
    <div className="hidden  md:flex  w-16 md:w-56  ">
      {/* Sidebar for larger screens */}
      <nav className="fixed hidden  md:flex flex-col justify-between   top-0 left-0 h-screen w-16 md:w-48 bg-white text-neutral-800  mt-12 dark:bg-neutral-900 dark:text-white  z-30  ">
        {/* Navigation Links */}
        <div className="flex-1 py-6 px-4  space-y-4">
          <ul className="flex items-centerq flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 px-2 md:px-4 py-3 text-xl font-semibold rounded-lg hover:text-white hover:bg-neutral-700 transition-all duration-200 transform hover:scale-100   
                    hover:shadow-xl"
                >
                  <span className="text-xl ">{item.icon}</span>
                  <span className="text-sm hidden md:block"> {item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center   mb-24">
          <div className="  w-[90%] rounded-lg mx-3 mt-10 ">
            <div className="flex items-center">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold ">John Doe</p>
                <p className="text-xs text-zinc-600">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
    </div>
    <div className=" fixed bottom-0 w-full  flex md:hidden items-center justify-between bg-white dark:bg-neutral-900 p-2 shadow-lg z-30">
    {navItems.map((item) => (
      <li key={item.href} className="list-none">
        <a
          href={item.href}
          className="flex items-center justify-center gap-4 px-4 py-3 text-xl font-semibold rounded-lg hover:text-white hover:bg-neutral-700 transition-all duration-200 transform hover:scale-100 hover:shadow-xl"
        >
          <span className="text-xl">{item.icon}</span>
        </a>
      </li>
    ))}
  </div>
  </>
  );
};

export default SideBar;
