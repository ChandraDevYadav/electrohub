import React from 'react'
import Frequently from './_Components/Frequently'
import { Link } from 'react-router-dom'
import FaqForm from './_Components/FaqForm'

const Faq = () => {
  return (
    <div className='bg-[#ebe6e6]'>
      <div className="bg-cover bg-center px-4 md:px-36 py-4 md:py-24 relative"
        style={{ backgroundImage: "url('/page-header-bg.jpg')" }}>
        <div className="absolute inset-0 bg-red-500 bg-opacity-70"></div>

        <div className="relative flex justify-center items-center">
          <div>
            <p className="text-center text-4xl md:text-6xl font-bold text-white">
              Help & FAQs
            </p>
            <p className="text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white">
              Professional Smartphone Laptop Repair Services in Germany Since 2000
            </p>
            <div className="flex justify-center items-center mt-3">
              <p className="text-white text-lg font-medium">
                <Link href="">Home </Link> // Gallery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Frequently/>
        <FaqForm/>
      </div>
    </div>
  )
}

export default Faq