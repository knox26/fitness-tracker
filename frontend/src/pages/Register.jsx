import React, { useState } from "react";
import login from "@/assets/login.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "reader", // Default role set to 'reader'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(`${url}/api/users/register`, formData);
    //   setFormData({
    //     name: "",
    //     email: "",
    //     password: "",
    //     role: "reader",
    //   });
    //   notify(response.data.message);
    //   navigate("/login");
    // } catch (error) {
    //   notify(error.response.data.message);
    // }
  };

  return (
    <section className="bg-gray-100 min-h-screen w-screen flex box-border justify-center  shadow-lg shadow-slate-400 items-center">
      <div className="bg-zinc-200 rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-5xl text-black">Register</h2>
          <p className="text-xl mt-4 text-black font-sans">
            Create your account now.
          </p>

          <form className="flex flex-col " onSubmit={handleSubmit}>
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="p-2 mt-4 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="p-2 mt-4 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              className="bg-blue-500 mt-4 text-white py-2 rounded-xl duration-300 hover:bg-blue-700 font-medium"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-sm flex justify-between items-center">
            <p className="text-base-content/60">
              If you already have an account...
              <Link to="/" className="text-blue-500 ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={login}
            alt="registration form visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
