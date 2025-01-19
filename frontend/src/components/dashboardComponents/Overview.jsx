import React from "react";
import StatCard from "../ui/card";
import ProgressBar from "../ui/progressBar";

function Overview() {
  return (
    <div className="w-full  mx-2 md:mx-5 flex flex-col  ">
      {/* Main content */}
      <main className="flex-1 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <StatCard
            bgColor={"bg-gradient-to-r from-slate-900 to-slate-700 text-white"}
          >
            <h2 className="text-4xl md:text-5xl font-semibold">
              Welcome <br />
              <span className="text-2xl text-semibold md:text-3xl ">
                John Doe
              </span>
            </h2>
            <ProgressBar targetProgress={75} />
            <div className="flex justify-between mt-2 text-sm text-gray-100">
              <span>Today's Progress</span>
              <span>%</span>
            </div>
          </StatCard>
        </div>
        <div className="grid grid-cols-2 md:flex  mt-5 gap-3">
          <StatCard
            bgColor={"bg-gradient-to-r from-blue-500 to-teal-400 text-white"}
          >
            <p className="text-lg md:text-2xl">calories burned</p>
            <h2 className="text-2xl md:text-5xl">450</h2>
            <ProgressBar targetProgress={75} />
            <p className="mt-1">goal : 1000</p>
          </StatCard>
          <StatCard
            bgColor={"bg-gradient-to-r from-blue-500 to-teal-400 text-white"}
          >
            <p className="text-lg md:text-2xl">calories burned</p>
            <h2 className="text-2xl md:text-5xl">450</h2>
            <ProgressBar targetProgress={75} />
            <p className="mt-1">goal : 1000</p>
          </StatCard>
          <StatCard
            bgColor={"bg-gradient-to-r from-blue-500 to-teal-400 text-white"}
          >
            <p className="text-lg md:text-2xl">calories burned</p>
            <h2 className="text-2xl md:text-5xl">450</h2>
            <ProgressBar targetProgress={75} />
            <p className="mt-1">goal : 1000</p>
          </StatCard>
          <StatCard
            bgColor={"bg-gradient-to-r from-blue-500 to-teal-400 text-white"}
          >
            <p className="text-lg md:text-2xl">calories burned</p>
            <h2 className="text-2xl md:text-5xl">450</h2>
            <ProgressBar targetProgress={75} />
            <p className="mt-1">goal : 1000</p>
          </StatCard>
        </div>
      </main>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Overview;
