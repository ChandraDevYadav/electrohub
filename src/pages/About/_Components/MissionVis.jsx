import React from 'react'
import { FaAward, FaUsersCog } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa6'

const MissionVis = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 pb-[5rem] px-4 md:px-36 bg-[#ede7e7]'>
                <div className=''>
                    <div className="transition-transform duration-500 ease-linear hover:scale-105 bg-white py-14 px-12">
                        <div className="flex justify-center items-center">
                            <div className="bg-red-600 p-7 rounded-full hover:bg-black transition-colors duration-500 ease-linear">
                                <FaUsersCog className="text-4xl text-white" />
                            </div>
                        </div>
                        <p className="font-bold text-3xl text-center mt-8">Who We Are</p>
                        <p className="text-center mt-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                    </div>

                </div>
                <div>
                    <div className="transition-transform duration-500 ease-linear hover:scale-110 bg-white py-14 px-12">
                        <div className="flex justify-center items-center">
                            <div className="bg-red-600 p-7 rounded-full hover:bg-black transition-colors duration-500 ease-linear">
                                <FaUsersCog className="text-4xl text-white" />
                            </div>
                        </div>
                        <p className="font-bold text-3xl text-center mt-8">Our Vision</p>
                        <p className="text-center mt-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                    </div>

                </div>
                <div>
                    <div className="transition-transform duration-500 ease-linear hover:scale-110 bg-white py-14 px-12">
                        <div className="flex justify-center items-center">
                            <div className="bg-red-600 p-7 rounded-full hover:bg-black transition-colors duration-500 ease-linear">
                                <FaUsersCog className="text-4xl text-white" />
                            </div>
                        </div>
                        <p className="font-bold text-3xl text-center mt-8">Our Mission</p>
                        <p className="text-center mt-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla dolor atur
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionVis