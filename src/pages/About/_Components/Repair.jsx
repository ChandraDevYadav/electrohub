import React from 'react'
import { FaAward, FaGifts, FaPlay } from 'react-icons/fa'
import { LiaUsersCogSolid } from 'react-icons/lia'

const Repair = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-12 bg-[#f7f7f9] pt-8 md:pt-24 pb-[5rem] px-4 md:px-36'>
            <div className='hidden md:block col-span-5 md:col-span-2 relative'>
                <div className='flex justify-end items-end'>
                    <div className='flex justify-center items-center z-10 gap-10 w-2/3 py-6 rounded-lg bg-white'>
                        <div className='flex justify-center'>
                            <div>
                                <p className='text-center text-4xl font-bold'>85%</p>
                                <p className='text-lg'>Repair Device</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className=''>
                                <p className='text-center text-4xl font-bold'>95%</p>
                                <p className='text-lg'>Replace Device</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute top-16 right-32'>
                    <img src="/about-2-1.jpg" alt="" className='w-full rounded-lg' />
                </div>
                <div className='absolute flex justify-end items-end -right-52 top-[18rem]'>
                    <div className="relative">
                        <img src="/skill-1-1.jpg" className='w-1/2 h-1/2  rounded-lg' alt="" />

                        <div className="absolute inset-0 bg-red-600 opacity-50 w-1/2  rounded-lg"></div>

                        <div className="absolute inset-0 flex justify-center items-center">
                            <button className="absolute top-1/2 left-24 w-12 h-12 rounded-full bg-white text-red-600 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 
                        box-shadow-[0_0_0_0_rgba(255,255,255,.5)] animation-ripple">
                                <FaPlay size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-span-5 md:col-span-3'>
                <div className='ml-10'>
                    <div className="flex gap-2 md:gap-4 justify-start items-center">
                        <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                        <h1 className="text-red-600">QUALITY REPAIR</h1>
                    </div>
                    <p className='text-4xl font-semibold py-6'>We Can Fix It Almost As Fast <br /> As You Can Break It.</p>
                    <p className='text-xl pb-6'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore</p>
                    <div className='border-t-2 border-b-2 border-gray-400 py-8'>
                        <ul>
                            <li className='flex justify-start items-center font-semibold text-xl gap-5 mb-6'><FaAward className='text-4xl' /> <p>WE ALWAYS PUT QUALITY FIRST</p></li>
                            <li className='flex justify-start items-center font-semibold text-xl gap-5 mb-6'><LiaUsersCogSolid className='text-4xl' /><p>CUSTOMER SATISFACTION IS ABSOLUTE</p></li>
                            <li className='flex justify-start items-center font-semibold text-xl gap-5'><FaGifts className='text-4xl' /><p>FAST AND QUALITY WORK</p></li>
                        </ul>
                    </div>
                    <p className='text-gray-600 text-md my-6'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free text market web bites eius mod ut labore duis aute irure pari </p>
                    <div className='flex justify-start items-center'>
                        <button className="relative bg-red-600 text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
                            <span className="relative z-10">Contact Us</span>
                            <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repair