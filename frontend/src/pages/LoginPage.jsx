import React, {  useState } from "react";
import login from "@/assets/login.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getProtectedData = async () => {
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   console.error('No token found in localStorage');
    //   toast.error('You are not authenticated. Please log in.');
    //   return;
    // }
    // try {
    //   const response = await axios.get(`${url}/api/users/protected`, {
    //     headers: {
    //       Authorization: JSON.parse(localStorage.getItem('token')), // Include token in request header
    //     }
    //   });
    //   setAuthor(response.data.user);
    // } catch (error) {
    //   console.error('Failed to fetch protected data', error);
    //   toast.error('Failed to fetch protected data. Please try again.');
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post(`${url}/api/users/login`, formData);
    //   const token = res.data.token;

    //   // Check if token is received
    //   if (token) {
    //     localStorage.setItem('token', JSON.stringify(token)); // Store token in localStorage
    //     toast.success('Login successful!');

    //     setLogin(true); // Update context state to indicate user is logged in

    //     // Navigate to the desired page upon successful login
    //     if (formData.role === 'reader') {
    //       navigate('/');
    //     } else {
    //       navigate('/admin');
    //     }

    //     getProtectedData(); // Fetch protected data after login

    //   } else {
    //     throw new Error('Token not received');
    //   }
    // } catch (error) {
    //   console.error('Login failed', error);
    //   toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    // }
  };

  return (
    <section className="bg-gray-100 min-h-screen w-screen flex box-border justify-center  shadow-lg shadow-slate-400 items-center">
      <div className="bg-zinc-200 rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-5xl text-black">Login</h2>
          <p className="text-xl mt-4 text-black font-sans">
            If you are already a member, easily log in now.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="bg-blue-500 text-white py-2 rounded-xl  duration-300 hover:bg-blue-800 font-medium"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-sm flex flex-col justify-between items-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?
              <Link to="/register" className="text-blue-500 ml-2">
                Create account
              </Link>
            </p>
            <Link to="/fergotPassword" className="text-blue-500 mt-2">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={login}
            alt="login form visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
