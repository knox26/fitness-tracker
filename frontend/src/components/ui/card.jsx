import React from "react";

function StatCard({ bgColor, children }) {
  return (
    <div
      className={`${bgColor} border border-gray-200 shadow-lg rounded-xl w-full md:p-5  p-2`}
    >
      {children}
    </div>
  );
}

export default StatCard;
