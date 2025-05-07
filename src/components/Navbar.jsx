import React, { use } from "react";
import logo from "../assets/app_logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/userIcon.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("You LogOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="w-11/12 mx-auto flex items-center justify-between py-4 bg-white">
        {/* Left - Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <Link to="/" className="text-3xl font-bold text-primary">
            AppNest
          </Link>
        </div>

        {/* Center - Nav Links */}
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

        {/* Right - Login Button */}
        <div className="flex gap-3">
          {/* User Profile */}
          <div>
            <img
              className="w-10 rounded-full cursor-pointer bg-blue-400"
              src={`${user ? user.photoURL : userIcon}`}
              alt=""
            />
          </div>

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
      </nav>
    </div>
  );
};

export default Navbar;
