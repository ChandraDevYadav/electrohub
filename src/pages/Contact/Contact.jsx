import React from 'react'
import MakeAppointment from './_Components/MakeAppointment'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='bg-cover bg-center py-16 md:py-32' style={{backgroundImage: "url('/counter-one-bg.jpg')"}}>
      <div className='flex justify-center items-center'>
      <div>
      <p className='text-center text-4xl md:text-6xl font-bold text-white'>Book an Appointment</p>
      <p className='text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white'>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
      <div className='flex justify-center items-center mt-3'>
        <p className='text-white text-lg font-medium'><Link href=''>Home </Link>// Book an Appointment</p>
      </div>
      </div>
      </div>
    </div>

    <div className="grid grid-cols-1">
      <div>
        <MakeAppointment/>
      </div>
      <div>
      <div className="flex justify-center items-center py-0 md:py-4 px-2 md:px-36">
      <iframe
        title="Biratnagar Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14295.682014712191!2d87.2718!3d26.4525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74200b79bf71%3A0xfac5df106851b331!2sBiratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1697463302986!5m2!1sen!2snp"
        width="100%"
        height="400"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Contact