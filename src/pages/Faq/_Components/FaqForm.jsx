import React from 'react'
import FaqDropDown from './FaqDropdown'

const FaqForm = () => {
  return (
    <div>
        <div className="flex gap-2 md:gap-4 justify-center items-center mt-24">
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                <h1 className="text-red-600 font-medium">STILL HAVE QUESTION?</h1>
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
            </div>
            <p className='text-center text-4xl md:text-5xl font-bold mt-6 px-4 text-black'>Let Us Know Or Call Us At</p>
            <p className='text-center mt-5 text-black text-lg px-6'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br className='hidden md:block'/>
            eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        <div className="grid grid-cols-1 px-4 md:px-36 py-4 md:pb-12">
        <div className=''>
                    <div className='pb-16 pt-10 mx-2 md:px-10'>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                            <input type="text" placeholder='Name' className='w-full py-3 px-4 rounded-md shadow-md' />
                            <input type="email" placeholder='Email' className='w-full py-3 px-4 rounded-md shadow-md' />
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mt-4'>
                            <input type="text" placeholder='Name' className='w-full py-3 px-4 rounded-md shadow-md' />
                            <input type="email" placeholder='Email' className='w-full py-3 px-4 rounded-md shadow-md' />
                        </div>
                        <div className='flex justify-start items-start gap-4 mt-4'>
                            <FaqDropDown />
                        </div>
                        <div className='flex justify-start items-start gap-4 mt-4'>
                            <textarea className='w-full rounded-md text-gray-400 px-4 py-4' rows={8} placeholder='Comments' />
                        </div>
                        <div className='flex justify-center items-start gap-4'>
                            <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-4 rounded-md overflow-hidden group w-full md:w-2/6">
                                <span className="relative z-10">Send Message</span>
                                <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                            </button>
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default FaqForm