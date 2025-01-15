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
    <div className=" bg-gray-50  -mt-16  md:ml-48 md:-mt-16">
      {/* Main layout */}
      <div className="pt-16 max-w-7xl mx-auto flex flex-col px-6">
        {/* Main content */}
        <main className="flex-1 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <StatCard
              bgColor=" bg-[#1c1917]/[80%]  text-white"
              title="Welcome"
              subTitle="John Doe"
              targetProgress={80}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

// Reusable StatCard Component
function StatCard({ bgColor, title, subTitle, targetProgress }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animation;
    if (progress < targetProgress) {
      animation = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 1, targetProgress));
      }, 15); // Adjust the speed of the animation by changing the delay
    }
    return () => clearTimeout(animation);
  }, [progress, targetProgress]);

  return (
    <div
      className={`${bgColor} border border-gray-200 shadow-lg rounded-xl w-full p-6`}
    >
      <h2 className="text-4xl md:text-5xl font-semibold">
        {title} <br />
        <span className="text-2xl text-semibold md:text-3xl ">{subTitle}</span>
      </h2>
      {progress !== undefined && (
        <div className="mt-6">
          <div className="relative w-full bg-gray-200 rounded-full h-4">
            <div
              className="absolute top-0 left-0 h-4  bg-[#292524] border rounded-full transition-all duration-[15ms] ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-100">
            <span>Today's Progress</span>
            <span>{progress}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
