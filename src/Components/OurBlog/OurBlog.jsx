import React from 'react'
import CardContainer from './_Components/CardContainer'

const OurBlog = () => {
  return (
    <div  className="relative px-4 md:px-36 pt-10 pb-12 bg-[#141414]">
        <div className='pt-12 md:pt-24'>
          <div className='flex justify-center items-center gap-4'>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>FROM OUR BLOG</h1>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-white mt-4'>News And Articles</p>
          <p className='text-white text-center font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
          eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
       
        <div className="container">
            <CardContainer />
        </div>
    </div>
  )
}

export default OurBlog