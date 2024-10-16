import React from 'react'
import ProgressContainer from './_Components/ProgressContainer'
import { FaPlay } from 'react-icons/fa'

const SkillExpertise = () => {
    return (
        <div className="bg-[#2a2929] px-4 md:px-36 py-4 md:py-16">

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8'>
                <div className=''>
                    <div className="flex gap-2 md:gap-4 justify-start items-center mt-6 md:mt-0">
                        <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                        <h1 className="text-red-600">OUR SKILLS & EXPERTISE</h1>
                    </div>
                    <p className='text-white font-semiboldbold text-3xl md:text-5xl mt-4'>We Specialize In Quick & Professional Repairs</p>
                    <p className='text-gray-300 text-md mt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some words which don't look even slightly believable.</p>
                    <p className='text-gray-300 text-md mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some words which don't look even slightly believable.</p>
                    <div>
                        <ProgressContainer />
                    </div>
                </div>
                <div className='relative flex justify-end items-end'>
            <div className="relative">
                <img src="/skill-1-1.jpg" className='w-full' alt="" />

                <div className="absolute inset-0 bg-red-600 opacity-50"></div>

                <div className="absolute inset-0 flex justify-center items-center">
                    <button className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-white text-red-600 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 
                        box-shadow-[0_0_0_0_rgba(255,255,255,.5)] animation-ripple">
                        <FaPlay size={40} />
                    </button>
                </div>
                
            </div>
            <div className="absolute bg-red-600 w-[31%] left-2 md:left-20 top-1/3 pl-4 rounded-lg py-10 hidden md:block">
                    <p className='text-xl font-bold text-white'>Improve gadget smartphone laptop repair services</p>
                </div>
        </div>


            </div>
        </div>
    )
}

export default SkillExpertise