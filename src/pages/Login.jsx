import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., Firebase, JWT, etc.)
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500">OR</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
