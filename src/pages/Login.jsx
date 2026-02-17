import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", email, password);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 px-4">
        
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login to CertiVerify
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Access your Digital Certificate Dashboard
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Secure Login
            </button>
          </form>

          {/* Signup Redirect */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?
            <Link
              to="/signup"
              className="text-blue-600 cursor-pointer hover:underline ml-1"
            >
              Signup
            </Link>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
