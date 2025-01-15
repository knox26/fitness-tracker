import React, { useState } from "react";
import { dropdownIcon } from "@/assets/svgs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30  w-full bg-white dark:bg-neutral-900 border-b border-neutral-200/20 dark:border-neutral-700 px-4 py-2 rounded-b-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-neutral-800 tracking-wide ml-5">
          FitTrack
        </h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-white hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200">
            {/* <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg> */}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg transition-all duration-200"
              />
              {dropdownIcon()}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 shadow-xl rounded-md py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
