import React, { useState } from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function VerifyOtpRegister() {
  const [value, setValue] = useState("");
  return (
    <section className="bg-gray-100 min-h-screen w-screen flex box-border justify-center  shadow-lg shadow-slate-400 items-center">
      <div className=" bg-zinc-200 rounded-2xl  max-w-3xl p-5 flex ">
        <div className=" md:w-1/2 px-8 ">
          <h2 className="font-bold text-5xl text-black mt-[35%]">
            Verify Email
          </h2>
          <p className="text-lg mt-7 text-black font-sans ">
            Enter the otp sent to your email.
          </p>

          <div className="space-y-2 flex flex-col items-center mt-5">
            <InputOTP
              maxLength={4}
              value={value}
              onChange={(value) => setValue(value)}
              className="bg-white"
            >
              <InputOTPGroup className="bg-white ">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <div className="text-center text-sm">
              {value === "" ? (
                <>Enter your one-time password.</>
              ) : (
                <>You entered: {value} </>
              )}
            </div>
            <button
              className="bg-blue-500 text-white py-2 rounded-lg  duration-300 hover:bg-blue-800 font-medium px-4"
              type="submit"
            >
              Verify otp
            </button>
          </div>
        </div>
        <div className="md:flex hidden w-1/2  items-center justify-center">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={login}
            alt="login form visual"
          />
        </div>
      </div>
    </section>
  );
}

export default VerifyOtpRegister;
