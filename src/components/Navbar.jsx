import React from "react";
import logo from "../assets/app_logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto flex items-center justify-between px-6 py-4 bg-white">
        {/* Left - Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-primary">AppNest</span>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-primary">
            Apps
          </NavLink>
          <NavLink to="/my-profile" className="hover:text-primary">
            My Profile
          </NavLink>
          <NavLink to="/blogs" className="hover:text-primary">
            Blogs
          </NavLink>
        </div>

        {/* Right - Login Button */}
        <div>
          <button className="px-8 py-2 btn btn-primary">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
