import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const { googleLogin } = useContext(AuthContext);
  const [ setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Set dynamic title
  useEffect(() => {
    document.title = "Register | AppNest";
  }, []);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Handle form submission for registration
  const handleRegister = (e) => {
    e.preventDefault();

    // Extract form data
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    // Call createUser function to register the user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update user profile with name and photo URL
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            // Set user in context and navigate to the home page
            setUser({ ...user, displayName: name, photoURL: photo });

            // Show success toast notification
            toast.success("Account created successfully!");

            navigate("/");
          })
          .catch((error) => {
            // Show error toast notification for profile update failure
            toast.error(`Failed to update profile: ${error.message}`);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        // Show error toast notification for registration failure
        toast.error(`Registration failed: ${errorMessage}`);
      });
  };

  // Handle Google login 
  const handleGoogleLogin = () => {
    toast.info("Attempting Google login...");
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        toast.error(`Google login failed: ${errorMessage}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        {/* Page title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Registration form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Photo URL input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              required
              placeholder="Link to your profile picture"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password error message */}
          {passwordError && (
            <p className="text-xs text-red-600">{passwordError}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-center">
          <span className="text-gray-500">OR</span>
        </div>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Redirect to login page */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
