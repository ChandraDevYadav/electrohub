import React from "react";
import "./AboutExperi.css";

const AboutExperi = () => {
  return (
    <div className="bg-[#2e2e2e] bg-cover bg-left" style={{backgroundImage: "url('/experience-one-shape-1.jpg')"}}>
      <div className="flex justify-center items-center gap-4 pt-16 md:pt-32">
        <div className="w-12 h-[2px] bg-red-700"></div>
        <h1 className="text-lg md:text-xl text-red-700 font-medium">ABOUT EXPERINCES</h1>
        <div className="w-12 h-[2px] bg-red-700"></div>
      </div>
      <h1 className="text-center text-2xl md:text-5xl font-bold mt-4 px-2 md:px-0 text-white">
        We Have Than 20 Years Experience in Gadget <br /> Smartphone & Laptop
        Repair Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-40 py-4 md:py-20">
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center gap-8 px-2 py-3 bg-[#272a2d] text-white overflow-hidden group">
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-linear transform translate-x-full group-hover:translate-x-0"></div>

            <div className="relative flex justify-center items-center gap-8 px-4 py-6">
              <img
                src="/cus-ser.png"
                className="w-16 bg-red-400 h-14 rounded-full p-2"
                alt=""
              />

              <div>
                <div>
                  <p className="text-xl font-bold">Quality Services</p>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center gap-8 px-2 py-3 bg-[#272a2d] text-white overflow-hidden group">
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-linear transform translate-x-full group-hover:translate-x-0"></div>

            <div className="relative flex justify-center items-center gap-8 px-4 py-6">
              <img
                src="/team.png"
                className="w-16 bg-red-400 h-14 rounded-full p-2"
                alt=""
              />

              <div>
                <div>
                  <p className="text-xl font-bold">
                  Professional Team</p>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center gap-8 px-2 py-3 bg-[#272a2d] text-white overflow-hidden group">
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-linear transform translate-x-full group-hover:translate-x-0"></div>

            <div className="relative flex justify-center items-center gap-8 px-4 py-6">
              <img
                src="/cus-su.png"
                className="w-16 bg-red-400 h-14 rounded-full p-2"
                alt=""
              />

              <div>
                <div>
                  <p className="text-xl font-bold">
                  24 Hour Support</p>
                  <p className="mt-3">
                    Duis aute irure dolor in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExperi;
