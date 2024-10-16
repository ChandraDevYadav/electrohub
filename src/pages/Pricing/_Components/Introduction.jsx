import React from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

const Introduction = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: "url('/core-services-bg.jpg')" }}>
            <div className="grid grid-cols-5 gap-4 px-4 md:px-36 py-4 md:py-36">
                <div className="col-span-5 md:col-span-2">
                    <div className="relative">
                        <div className="">
                            <div className="relative overflow-hidden w-full rounded-lg">
                                <img
                                    src="/about-1-1.jpg"
                                    alt=""
                                    className="w-full h-full transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100 object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[64.4%] md:top-[66%] bg-red-600 rounded-tr-lg rounded-bl-lg py-6 md:py-12 pl-6 pr-12">
                            <p className="text-white font-medium text-xl mb-6">OUR GOAL:</p>
                            <p className="font-bold text-3xl text-white">
                                "We will fix it, till <br /> we make it"
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 md:col-span-3">
                    <div className="pl-4 md:pl-24 pt-10 md:pt-0">
                        <div className="flex gap-2 md:gap-4 justify-start items-center">
                            <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                            <h1 className="text-red-600">OUR INTRODUCTION</h1>
                        </div>
                        <p className="text-3xl md:text-4xl font-bold text-black mt-6">
                            Welcome To Smartphone & Laptop Repair Service Center
                        </p>
                        <p className="text-black mt-4 md:mt-8">
                            Duis aute irure dolor in repreh enderit in volup tate velit esse
                            cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is
                            simply free text market web bites eius mod ut labore duis aute
                            irure pari
                        </p>
                        <div className="relative flex gap-6 bg-[#ffffff] mb-6 py-6 pl-6 rounded-lg shadow-lg mt-4 overflow-hidden group hover:bg-red-600 transition-all duration-500 ease-linear">
                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-linear transform translate-x-full group-hover:translate-x-0"></div>

                            <div className="relative flex gap-5 items-center">
                                <div className="bg-red-600 group-hover:bg-white p-4 rounded-full transition-all duration-500 ease-linear">
                                    <FaCheckCircle className="text-white group-hover:text-red-600 text-4xl transition-all duration-500 ease-linear" />
                                </div>
                                <div>
                                    <p className="text-[1.5rem] text-black font-bold group-hover:text-white transition-all duration-500 ease-linear">Same Day Repairs</p>
                                    <p className="text-black text-[lg] mt-3 group-hover:text-white transition-all duration-500 ease-linear">
                                        Lorem ipsum dolor sit amet at labore consectetur
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex gap-6 bg-[#ffffff] mb-6 py-6 pl-6 md:pl-10 rounded-lg shadow-lg mt-4 overflow-hidden group hover:bg-red-600 transition-all duration-500 ease-linear">
                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-red-600 transition-all duration-500 ease-linear transform translate-x-full group-hover:translate-x-0"></div>

                            <div className="relative flex gap-5 items-center z-10">
                                <div className="bg-red-600 group-hover:bg-white p-4 rounded-full transition-all duration-500 ease-linear">
                                    <GiAutoRepair className="text-white group-hover:text-red-600 text-4xl transition-all duration-500 ease-linear" />
                                </div>
                                <div>
                                    <p className="text-[1.5rem] text-black font-bold group-hover:text-white transition-all duration-500 ease-linear">
                                        Guarantee Service
                                    </p>
                                    <p className="text-black text-[lg] mt-3 group-hover:text-white transition-all duration-500 ease-linear">
                                        Lorem ipsum dolor sit amet at labore consectetur
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="relative bg-red-600 text-white mt-0 md:mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
                            <span className="relative z-10">Contact Us</span>
                            <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
