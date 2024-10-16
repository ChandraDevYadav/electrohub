import React from 'react'
import Accordion from './_components/Accordion'

const Frequently = () => {
    return (
        <div className="bg-[#2a2929] px-6 md:px-36 py-16">

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8'>
                <div className=''>
                    <div className="flex gap-2 md:gap-4 justify-start items-center">
                        <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                        <h1 className="text-red-600">HAVE QUESTIONS?</h1>
                    </div>
                    <p className='text-white font-bold text-3xl md:text-4xl mt-4'>Frequently Asked Question</p>
                    <p className='text-white mt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form, by injected randomised words which don't look even slightly believable.
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                    <p className='text-white mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected randomised words which don't look even
                        slightly believable. There are many variations</p>
                        <button className="relative bg-red-600 text-white mt-6 font-bold px-10 py-5 rounded-md overflow-hidden group">
              <span className="relative z-10">Ask Questions Here</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
                </div>
                <div className=''>
                    <Accordion/>
                </div>
            </div>
        </div>
    )
}

export default Frequently
