import React, { useState } from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import OtpInput from "@/components/ui/otp";

function VerifyOtpRegister() {

  return (
    <section className="bg-gray-100 min-h-screen w-screen flex box-border justify-center  shadow-lg shadow-slate-400 items-center">
      <div className=" bg-zinc-200 rounded-2xl  max-w-3xl p-5 flex ">
        <div className=" md:w-1/2 px-8 flex flex-col items-center  ">
          <h2 className="font-bold text-5xl text-black mt-[35%]">
            Verify Email
          </h2>
          <p className="text-lg mt-7 text-black font-sans ">
            Enter the otp sent to your email.
          </p>
          <button className="text-blue-500 hover:text-blue-700" >resend otp</button>

          <div className="space-y-2 flex flex-col items-center mt-5">
            <OtpInput length={4} />
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
