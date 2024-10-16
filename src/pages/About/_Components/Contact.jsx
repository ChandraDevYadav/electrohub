import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="relative">
      {/* Background image section */}
      <div className='bg-cover bg-center py-16 md:py-24 relative' style={{backgroundImage: "url('/main-slider-1-3.jpg')"}}>
        
        {/* Red overlay with opacity */}
        <div className="absolute inset-0 bg-red-600 opacity-70"></div>
        
        {/* Content of the contact section */}
        <div className="flex justify-center items-center relative z-10">
          <div>
            <div className="flex justify-center items-center gap-4 pt-16 md:pt-6">
              <div className="w-12 h-[2px] bg-white"></div>
              <h1 className="text-lg md:text-xl text-white font-medium">CONTACT US</h1>
              <div className="w-12 h-[2px] bg-white"></div>
            </div>
            <p className='text-center text-md md:text-4xl my-5 mx-6 md:mx-0 font-bold text-white'>
              Get support for your problem
            </p>
            <p className='text-center text-white font-medium'>
              Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
              eu fugiat nulla dolor atur with Lorem ipsum is simply
            </p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-12'>
              <div className='flex justify-center items-center gap-4 bg-white rounded-md py-4 px-6'>
                <div>
                    <div className='bg-red-600 text-white p-4 rounded-full'>
                    <FaEnvelope className='text-3xl'/>
                    </div>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>Send us an email</p>
                    <p>contact@gmail.com</p>
                </div>
              </div>
              <div className='flex justify-center items-center gap-4 bg-white rounded-md py-4 pl-6 pr-16'>
                <div>
                    <div className='bg-red-600 text-white p-4 rounded-full'>
                    <FaPhone className='text-3xl'/>
                    </div>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>Give us a call</p>
                    <p>+012 (435) 7689</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
