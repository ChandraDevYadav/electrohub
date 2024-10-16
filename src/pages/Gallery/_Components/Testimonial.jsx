import React from 'react'
import Carousel from './Carousel'

const Testimonial = () => {
    return (
        <div className="bg-[#f1eeee] px-4 md:px-36 py-28">
            <div className="flex gap-2 md:gap-4 justify-start items-center">
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                <h1 className="text-red-600 font-medium">OUR HAPPY CLIENTS</h1>
            </div>
            <p className='text-5xl text-black font-bold mt-4'>Our Customers Review</p>
            <div className='grid grid-cols-1 gap-x-5 gap-y-8 mt-6 md:mt-16'>
                <div className=''>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial