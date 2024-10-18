import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaCartPlus, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SmallNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#141414] py-3 px-2 lg:hidden sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to='/'><img src="/logo.png" className="w-12" alt="Electro Hub Logo" /></Link>
          <p className="text-2xl text-white font-bold ml-2">
            ELECTRO <span className="text-3xl text-red-600">HUB</span>
          </p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex justify-between items-center gap-12 pr-1">
          <Link to='/cart'><FaCartPlus className="text-white text-2xl" /></Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Conditional rendering */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 w-full">
          <div className="w-1/2 relative">
            {/* Close Icon */}
            
            <div className="w-full absolute z-50 bg-[#141414] mt-3 -left-2">
            {/* <div className="flex justify-start items-start px-4 py-2">
              
            <input type="text" placeholder="Search" className="border-2 border-white bg-transparent pl-2 w-full"/>
            </div> */}
            <ul className="w-full bg-[#141414] mt-3 z-50">
              <li>
                <Link
                  className="rounded-t text-white text-lg pb-4 hover:bg-red-600 hover:text-white px-6 font-medium block whitespace-no-wrap"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/appointment"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/faq"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/checkout"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-t text-white hover:bg-red-600 hover:text-white px-6 text-lg pb-4 font-medium block whitespace-no-wrap"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallNavbar;
