import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" w-11/12 mx-auto  py-10">
      <div className="py-10">
        <hr className="border-t border-gray-300" />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <Link to="/" className="text-xl font-bold text-primary">
            AppNest
          </Link>
          <p className=" pt-8">
            Building modern apps with love & innovation. Stay connected with us!
          </p>
        </div>

        {/* Internal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link>Terms of Service</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Developer Resources</Link>
            </li>
          </ul>
        </div>

        {/* Social Media - External */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="w-6 h-6 hover:text-primary" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-primary" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AppNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
