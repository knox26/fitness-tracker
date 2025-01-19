import React, { useState } from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import OtpInput from "@/components/ui/otp";

function FergotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-100 min-h-screen w-screen flex box-border justify-center  shadow-lg shadow-slate-400 items-center">
      <div className=" bg-zinc-200 rounded-2xl  max-w-3xl p-5 flex ">
        <div className=" md:w-1/2 px-8 ">
          <h2 className="font-bold text-5xl text-black mt-[20%]">
            Forgot Password ?
          </h2>
          <p className="text-lg mt-7 text-black font-sans ">
            Enter your email to get the otp.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="p-2 mt-8 rounded-lg border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              className="bg-blue-500 text-white py-2 rounded-lg  duration-300 hover:bg-blue-800 font-medium"
              type="submit"
            >
              Send otp
            </button>
          </form>
          <div className="space-y-2 flex flex-col items-center mt-5">
            
            <div className="w-full">
              <OtpInput length={4}/>
               
              
            </div>
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

export default FergotPassword;
