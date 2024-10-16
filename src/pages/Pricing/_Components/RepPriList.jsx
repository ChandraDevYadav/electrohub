import React from 'react'

const RepPriList = () => {
    return (
        <div className='px-4 md:px-36 pt-4 md:pt-16 pb-10 md:pb-20'>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <div className="flex justify-start items-center gap-4">
                        <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                        <h1 className="text-red-600">REPAIR PRICE LIST</h1>
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-black mt-6">
                        Affordable Price For You</p>
                    <p className="text-black font-medium mt-4 md:mt-8">
                        There are many variations of passages of Lorem Ipsum available, <br className='hidden md:block'/>
                        but the majority have suffered alteration in some words which <br className='hidden md:block'/>
                        don't look even slightly believable.
                    </p>
                </div>
                <div>
                    <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
                        <span className="relative z-10">Make Appointment</span>
                        <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default RepPriList