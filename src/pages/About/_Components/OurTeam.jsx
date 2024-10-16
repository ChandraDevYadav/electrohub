import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AboutCard from './AboutCard'

const OurTeam = () => {
    return (
        <div className="relative px-4 md:px-32">
            <div className='py-16 md:py-24 relative'>
                <div className="flex justify-center items-center relative z-10">
                    <div>
                        <div className="flex justify-center items-center gap-4 pt-16 md:pt-6">
                            <div className="w-12 h-[2px] bg-red-600"></div>
                            <h1 className="text-lg md:text-xl text-red-600 font-medium">CONTACT US</h1>
                            <div className="w-12 h-[2px] bg-red-600"></div>
                        </div>
                        <p className='text-center text-md md:text-5xl my-5 mx-6 md:mx-0 font-bold text-black'>
                            Get support for your problem
                        </p>
                        <p className='text-center text-gray-500 font-medium'>
                            Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
                            eu fugiat nulla dolor atur with Lorem ipsum is simply
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div>
                        <AboutCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
