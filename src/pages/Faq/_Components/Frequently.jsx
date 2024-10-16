import React from 'react'
import Accordion from './Accordion'

const Frequently = () => {
  return (
    <div className='px-4 md:px-36 py-4 md:py-24 bg-[#262525]'>
        <div className="flex gap-2 md:gap-4 justify-center items-center">
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                <h1 className="text-red-600 font-medium">HAVE QUESTIONS?</h1>
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
            </div>
            <p className='text-center text-4xl md:text-5xl font-bold mt-6 text-white'>Frequently Asked Question</p>
            <p className='text-center mt-5 text-white mx-3'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br className='hidden md:block'/>
            eu fugiat nulla dolor atur with Lorem ipsum is simply</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Accordion/>
                </div>
                <div>
                    <Accordion/>
                </div>
            </div>
    </div>
  )
}

export default Frequently