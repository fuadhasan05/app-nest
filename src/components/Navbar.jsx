import React, { useContext, useState } from "react";
import logo from "../assets/app_logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/userIcon.png";
import { ToastContainer, toast } from "react-toastify";
import { FaBars } from "react-icons/fa"; // Import hamburger menu icon
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 
  const [showTooltip, setShowTooltip] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false); 

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Show success toast notification
        toast.success("You have successfully logged out!");
      })
      .catch((error) => {
        // Show error toast notification
        toast.error(`Logout failed: ${error.message}`);
        console.log(error);
      });
  };

  return (
    <div>
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={2000} />

      <nav className="w-11/12 mx-auto flex items-center justify-between py-4 bg-white">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <Link to="/" className="text-3xl font-bold text-primary">
            AppNest
          </Link>
        </div>

        {/* Center - Nav Links (hidden on small devices) */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/auth/profile"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Blogs
          </NavLink>
        </div>

        {/* Right - User Profile and Dropdown */}
        <div className="flex items-center gap-3">
          {/* User Profile */}
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
            onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
          >
            <img
              className="w-10 h-10 rounded-full cursor-pointer bg-blue-100"
              src={user?.photoURL || userIcon}
              alt="User Profile"
            />
            {/* Tooltip for username */}
            {showTooltip && user?.displayName && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg">
                {user.displayName}
              </div>
            )}
          </div>

          <div className="hidden md:block lg:block ">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-8 py-2 btn btn-primary"
            >
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="px-8 py-2 btn btn-primary">
              Login
            </Link>
          )}
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="md:hidden">
            <FaBars
              className="text-gray-600 text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)} // Toggle dropdown menu
            />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu for Small Devices */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg w-11/12 mx-auto mt-2">
          <ul className="flex flex-col text-gray-700">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  LogOut
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
