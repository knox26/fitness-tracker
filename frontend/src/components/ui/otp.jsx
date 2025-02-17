/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // Optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <div className="flex space-x-2 items-center justify-center ">
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          );
        })}
      </div>
      <div className="text-center text-sm mt-1">
        <p>Enter your one-time password.</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <button
          className="bg-blue-500 text-white py-2 rounded-lg  duration-300 hover:bg-blue-800 font-medium px-4 mt-3"
          onClick={onOtpSubmit()}
        >
          Verify otp
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
