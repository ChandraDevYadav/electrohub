import React from 'react'

const Subscription = () => {
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
          <p className='text-white text-center font-medium mt-5 mb-10 text-lg'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br className='hidden md:block'/>
          eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
            <input type="email" placeholder='Your Email' className='py-4 px-4 border-2 border-white placeholder-gray-400 bg-white md:bg-transparent rounded-md w-full md:w-2/5' />
            <button className='bg-white px-8 py-4 rounded-md font-semibold'>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Subscription