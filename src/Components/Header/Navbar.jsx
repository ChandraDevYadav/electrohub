import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaCartPlus, FaPhone, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden lg:block sticky top-0 z-50">
      <div className="grid grid-cols-8 py-3 px-2 bg-[#141414]">
      <div className="col-span-2">
        <div className="flex justify-center items-center">
        <img src="/logo.png" className="w-12" alt="" />
        <p className="text-2xl text-white font-bold">ELECTRO <span className="text-3xl text-red-600">HUB</span></p>
        </div>
      </div>
      <div className="col-span-4">
        <div className="flex justify-center items-center gap-3">
          <Link className="text-white font-semibold px-4" to="/">
            HOME
          </Link>
          <Link className="text-white font-semibold px-4" to="/about">
            ABOUT
          </Link>
          <div class="relative group inline-block">
            <p class="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              PAGES
            </p>

            <ul class="absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/appointment"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/faq"
                >
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              SERVICES
            </p>

            <ul class="absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/servicedetail"
                >
                  Service Details
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              BLOG
            </p>

            <ul class="absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/blogdetail"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </div>
          <div class="relative group inline-block">
            <p class="text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              SHOP
            </p>

            <ul class="absolute hidden group-hover:block bg-white text-gray-700 w-52 py-6 px-4 rounded-b-lg z-10">
              <li className="">
                <Link
                  class="rounded-t hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  class=" hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/productdetail"
                >
                  Product Details
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-b  hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  class="rounded-b  hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap"
                  to="/checkout"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
          <Link className="text-white font-semibold px-4" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      <div className="col-span-2 border-l-2 border-l-gray-300">
        <div className="flex justify-center items-center mt-2">
        <CiSearch className="text-3xl mx-4 hover:text-red-600 text-white"/>
        <Link to='/cart' className=""><FaCartPlus className="text-3xl mx-4 text-white hover:text-red-600"/></Link>
        <div className="mx-4">
            <Link to='' className="hover:text-red-600 text-white font-bold"><FaPhone className="text-xl text-white mx-4 hover:text-red-600"/></Link>
        </div>
        <Link to='/login' className="text-white text-lg font-semibold">Login</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
