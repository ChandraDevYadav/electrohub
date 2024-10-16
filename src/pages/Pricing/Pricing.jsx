import React from 'react'
import Introduction from './_Components/Introduction'
import { Link } from 'react-router-dom'
import RepPriList from './_Components/RepPriList'
import RepairComputer from './_Components/RepairComputer'
import RepairMobile from './_Components/RepairMobile'
import RepairTablet from './_Components/RepairTablet'
import Services from '../../Components/Services/Services'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Subscription from '../../Components/Subscription/Subscription'

const Pricing = () => {
  return (
    <div>
      <div className='bg-cover bg-center py-16 md:py-32' style={{backgroundImage: "url('/counter-one-bg.jpg')"}}>
      <div className='flex justify-center items-center'>
      <div>
      <p className='text-center text-4xl md:text-6xl font-bold text-white'>Price Page</p>
      <p className='text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white'>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
      <div className='flex justify-center items-center mt-3'>
        <p className='text-white text-lg font-medium'><Link href=''>Home </Link>// Price</p>
      </div>
      </div>
      </div>
    </div>
      <Introduction/>
      <RepPriList/>
      <RepairComputer/>
      <RepairMobile/>
      <RepairTablet/>
      <Services/>
      <Subscription/>
    </div>
  )
}

export default Pricing