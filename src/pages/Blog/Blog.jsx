import React from 'react'
import CardContainer from './_Components/CardContainer'
import { Link } from 'react-router-dom'
import PaginationDemo from './_Components/Pagination'

const Blog = () => {
  return (
    <div>
      <div className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
        style={{ backgroundImage: "url('/page-header-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-500 bg-opacity-70"></div>

        <div className="relative flex justify-center items-center">
          <div>
            <p className="text-center text-4xl md:text-6xl font-bold text-white">
            Phone Repair
            </p>
            <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
              Professional Smartphone Laptop Repair Services in Germany Since 2000
            </p>
            <div className="flex justify-center items-center mt-3">
              <p className="text-white text-lg font-medium">
                <Link href="">Home </Link> // Service Detail
              </p>
            </div>
          </div>
        </div>
      </div>
    <div  className="relative px-4 md:px-36 pt-10 pb-12 bg-[#f7f4f4]">
        <div className='pt-12 md:pt-24'>
          <div className='flex justify-center items-center gap-4'>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>FROM OUR BLOG</h1>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-black mt-4'>News And Articles</p>
          <p className='text-black text-center font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
          eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
       
        <div className="container">
            <CardContainer />
            <PaginationDemo/>
        </div>
    </div>
    </div>
  )
}

export default Blog