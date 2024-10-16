import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div  className="relative bg-cover bg-center px-4 md:px-36 pt-10 pb-[5rem] bg-black opacity-100"
    style={{ backgroundImage: 'url("/contact-one-bg.jpg")' }}>
        <div className='pt-8 md:pt-24'>
          <div className='flex justify-center items-center gap-2 md:gap-4'>
            <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>CONTACT US</h1>
            <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-white mt-4'>Let Us Know Or Call Us At</p>
          <p className='text-white text-center font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
          eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
            <div className='bg-white py-7 pr-14 pl-4 rounded-lg shadow-sm flex justify-center items-center gap-5'>
                <div className='bg-red-600 p-3 rounded-full'>
                    <FaEnvelope className='text-white text-2xl'/>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Send us an email</p>
                    <p className='text-gray-500'>contact@gmail.com</p>
                </div>
            </div>
            <div className='bg-white py-7 pr-14 pl-4 rounded-lg shadow-sm flex justify-center items-center gap-5'>
                <div className='bg-red-600 p-3 rounded-full'>
                    <FaPhone className='text-white text-2xl'/>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Send us an email</p>
                    <p className='text-gray-500'>contact@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact