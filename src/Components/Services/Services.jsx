import React from 'react';
import { FaWrench, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <div className="bg-[#1a1a1a] px-4 md:px-36 py-8 md:py-12">
      <div className='flex justify-center items-center'>
        <div>
          <div className='flex justify-center items-center gap-4'>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>OUR SERVICES</h1>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-white mt-4'>Our Efficient Solution</p>
          <p className='text-white text-center text-lg md:text-lg font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5'>
        {/* Service 1 */}
        <div className='gap-4 bg-[#232222] relative overflow-hidden mb-6 rounded-lg'>
          <div className="group relative overflow-hidden">
            <img src="/services-1-1.jpg" className='w-full h-auto transition-transform duration-500 transform group-hover:scale-110' alt="Warranty" />
            {/* Hover overlay sliding from top to bottom */}
            <div className="absolute inset-0 bg-red-600/60 transition-all duration-500 ease-linear transform -translate-y-full group-hover:translate-y-0"></div>
            {/* Icon positioned at the top left */}
            <div className="absolute top-4 left-4 text-red-600 text-3xl transition-colors duration-300 group-hover:text-white">
              <FaWrench className='w-16 h-16' />
            </div>
          </div>
          <div className='px-6 py-6'>
            <p className='text-2xl font-bold text-white'>Laptop Repair</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
            <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Repair Now</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className='gap-4 bg-[#232222] relative overflow-hidden mb-6 rounded-lg'>
          <div className="group relative overflow-hidden">
            <img src="/services-1-2.jpg" className='w-full h-auto transition-transform duration-500 transform group-hover:scale-110' alt="Customer Service" />
            {/* Hover overlay sliding from top to bottom */}
            <div className="absolute inset-0 bg-red-600/60 transition-all duration-500 ease-linear transform -translate-y-full group-hover:translate-y-0"></div>
            {/* Icon positioned at the top left */}
            <div className="absolute top-4 left-4 text-red-600 text-3xl transition-colors duration-300 group-hover:text-white">
              <FaMobileAlt className='w-16 h-16' />
            </div>
          </div>
          <div className='px-6 py-6'>
            <p className='text-2xl font-bold text-white'>Phone Repair</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
            <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Repair Now</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>

        {/* Service 3 */}
        <div className='gap-4 bg-[#232222] relative overflow-hidden mb-6 rounded-lg'>
          <div className="group relative overflow-hidden">
            <img src="/services-1-3.jpg" className='w-full h-auto transition-transform duration-500 transform group-hover:scale-110' alt="Secured Device" />
            {/* Hover overlay sliding from top to bottom */}
            <div className="absolute inset-0 bg-red-600/60 transition-all duration-500 ease-linear transform -translate-y-full group-hover:translate-y-0"></div>
            {/* Icon positioned at the top left */}
            <div className="absolute top-4 left-4 text-red-600 text-3xl transition-colors duration-300 group-hover:text-white">
              <FaTabletAlt className='w-16 h-16' />
            </div>
          </div>
          <div className='px-6 py-6'>
            <p className='text-2xl font-bold text-white'>Tablet Repair</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
            <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Repair Now</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
