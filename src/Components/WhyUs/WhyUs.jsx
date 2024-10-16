import React from 'react'

const WhyUs = () => {
  return (
    <div className="bg-[#1a1a1a] px-4 md:px-36 py-10 md:py-16">
      <div className='flex justify-center items-center'>
        <div>
          <div className='flex justify-center items-center gap-4'>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>Why Choose Us</h1>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-white mt-4 '>Gadget Repair For Everyone</p>
          <p className='text-white text-center text-lg md:text-lg font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
            eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8'>
        <div className='flex justify-center items-center gap-4 bg-[#0b0b0b] py-8 rounded-lg px-8 hover:border-2 hover:border-red-600 hover:scale-95 transform transition-transform duration-300'>
          <img src="/warranty.png" className='w-20 h-20' alt="Warranty" />
          <div>
            <p className='text-2xl font-bold text-white'>Warranty Service</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 bg-[#0b0b0b] py-8 rounded-lg px-8 hover:border-2 hover:border-red-600 hover:scale-95 transform transition-transform duration-300'>
          <img src="/cus-su.png" className='w-20 h-20' alt="Customer Service" />
          <div>
            <p className='text-2xl font-bold text-white'>
              Customer Service</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 bg-[#0b0b0b] py-8 rounded-lg px-8 hover:border-2 hover:border-red-600 hover:scale-95 transform transition-transform duration-300'>
          <img src="/device (1).png" className='w-20 h-20' alt="Secured Device" />
          <div>
            <p className='text-2xl font-bold text-white'>Secured Device</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 bg-[#0b0b0b] py-8 rounded-lg px-8 hover:border-2 hover:border-red-600 hover:scale-95 transform transition-transform duration-300'>
          <img src="/threat.png" className='w-20 h-20' alt="No Virus Threat" />
          <div>
            <p className='text-2xl font-bold text-white'>
              No Virus Threat</p>
            <p className='font-medium text-white mt-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore eu fugiat</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center text-center py-10 text-white text-lg'>
      <p>Get proper services from us <span className='text-red-600 underline'>guideline and knowledge</span></p>
      </div>
    </div>
  )
}

export default WhyUs
