import React from 'react'
import { FiSend } from 'react-icons/fi'
import { BsClock, BsEnvelope } from 'react-icons/bs'
import { FaClock, FaPhone } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import SelectDropdown from '../../Appointment/_Components/SelectDropdown'

const MakeAppointment = () => {
    return (
        <div className='px-4 md:px-36 py-4 md:py-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className=''>
                    <div className='bg-[#ebe6e6] py-6 md:py-16 px-4 md:px-10'>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                            <input type="text" placeholder='Name' className='w-full py-3 px-4 rounded-md' />
                            <input type="email" placeholder='Email' className='w-full py-3 px-4 rounded-md' />
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mt-4'>
                            <input type="text" placeholder='Name' className='w-full py-3 px-4 rounded-md' />
                            <input type="email" placeholder='Email' className='w-full py-3 px-4 rounded-md' />
                        </div>
                        <div className='flex justify-start items-start gap-4 mt-4'>
                            <SelectDropdown />
                        </div>
                        <div className='flex justify-start items-start gap-4 mt-4'>
                            <textarea className='w-full rounded-md text-gray-400 px-4 py-4' rows={8} placeholder='Comments' />
                        </div>
                        <div className='flex justify-center md:justify-start items-start gap-4'>
                            <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
                                <span className="relative z-10">Send Message</span>
                                <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                            </button>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='mt-2 md:mt-6'>
                        <div className='flex justify-start items-center gap-4'>
                            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
                            <h1 className='text-red-600 text-md text-center font-medium'>MAKE APPOINTMENT</h1>
                        </div>
                        <div className='border-b border-gray-400 pb-8'>
                            <p className='text-4xl md:text-5xl font-bold text-black mt-6'>Book A Services</p>
                            <p className='text-2xl text-black mt-6'>Duis aute irure dolor in repreh enderit volup tate <br className='hidden md:block'/> velit esse cillum dolore</p>
                        </div>
                        <div className='border-b border-gray-400 pb-8'>
                            <p className='text-md text-black mt-7'>Duis aute irure dolor in repreh enderit in volup tate cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply free market web bites eius mod ut labore duis</p>
                        </div>
                        <div className='pt-8 flex flex-col lg:flex-row justify-between items-center'>
                            <div>
                                <p className='text-xl font-bold'>Kathmandu</p>
                                <ul className='mt-5'>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><FiSend className='text-xl text-red-500'/> 71890 Champlin Neck </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><BsEnvelope className='text-xl text-red-500'/>support@domain.com </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><MdLocalPhone className='text-xl text-red-500' /> (+62) 81 322 1467 </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><BsClock className='text-xl text-red-500' /> 09:00 AM - 22:00 PM </li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-xl font-bold'>Biratnagar</p>
                                <ul className='mt-5'>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><FiSend className='text-xl text-red-500'/> 71890 Champlin Neck </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><BsEnvelope className='text-xl text-red-500'/>support@domain.com </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><MdLocalPhone className='text-xl text-red-500' /> (+62) 81 322 1467 </li>
                                    <li className='flex justify-start items-center gap-3 hover:text-red-500 mb-4'><BsClock className='text-xl text-red-500' /> 09:00 AM - 22:00 PM </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment