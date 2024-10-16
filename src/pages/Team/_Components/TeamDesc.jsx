import React from 'react'

const TeamDesc = () => {
    return (
        <div className='py-16 md:py-32'>
            <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-[2px] bg-red-700"></div>
                <h1 className="text-lg md:text-xl text-red-700 font-medium">MEET OUR TEAM</h1>
                <div className="w-12 h-[2px] bg-red-700"></div>
            </div>
            <h1 className="text-center text-4xl md:text-5xl font-bold mt-6 px-2 md:px-0 text-black">
                We're Gadgetin, Profesional Gadget <br className='hidden md:block'/>
                Repair Team
            </h1>
            <p className='text-center mt-6 mx-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla <br className='hidden md:block'/>
                dolor atur with Lorem ipsum is simply</p>
            <div className='flex justify-center items-center mt-4'>
                <button className="relative bg-red-600 text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                </button>
            </div>
        </div>
    )
}

export default TeamDesc