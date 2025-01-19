import React, { useState, useEffect } from "react";

function ProgressBar({ targetProgress }) {
  const [progress, setProgress] = useState(0);
  const Progress = progress;
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
    <>
      {progress !== undefined && (
        <div className="mt-2 md:mt-4">
          <div className="relative w-full bg-gray-200 rounded-full h-2">
            <div
              className="absolute top-0 left-0 h-2  bg-gradient-to-r from-indigo-500 to-purple-600 border rounded-full transition-all duration-[15ms] ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProgressBar;
