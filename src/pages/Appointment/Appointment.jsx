import React from 'react'
import { Link } from 'react-router-dom'
import BookService from './_Components/BookService'
import Contact from './_Components/Contact'
import MakeAppointment from './_Components/MakeAppointment'
import Carousel from './_Components/Carousel'

const Appointment = () => {
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
      <BookService/>
      <Contact/>
      <MakeAppointment/>
      <Carousel/>
    </div>
  )
}

export default Appointment