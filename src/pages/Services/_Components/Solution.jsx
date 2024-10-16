import React from 'react'
import { FaLaptopCode, FaLaptopHouse } from 'react-icons/fa'
import { ImMobile } from 'react-icons/im'
import { TbCameraCog, TbDeviceMobileCog } from 'react-icons/tb'
import { TfiTablet } from 'react-icons/tfi'
import Subscription from '../../../Components/Subscription/Subscription'
import Testimonial from '../../Gallery/_Components/Testimonial'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <div>
        <div className="flex gap-2 md:gap-4 justify-center items-center mt-24">
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                <h1 className="text-red-600 font-medium">STILL HAVE QUESTION?</h1>
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
            </div>
            <p className='text-center text-4xl mx-4 md:text-5xl font-bold mt-6 text-black'>Let Us Know Or Call Us At</p>
            <p className='text-center mt-5 text-black text-lg mx-6'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br className='hidden md:block'/>
            eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-36 py-12 md:pb-12 gap-x-6 gap-y-6">
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <TbDeviceMobileCog className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 text-center font-bold mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <TfiTablet  className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 text-center font-bold mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <FaLaptopCode  className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 text-center font-bold mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <FaLaptopHouse  className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 text-center font-bold mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <TbCameraCog  className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 text-center font-bold mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>
             <div className='bg-white py-16 px-6 rounded-md'>
                <Link to='/servicedetail'>
                    <div className='flex justify-center items-center'>
                    <div className='bg-red-600 p-4 rounded-full text-white hover:bg-gray-200 hover:text-red-600'>
                    <ImMobile  className='text-5xl'/>
                    </div>
                    </div>
                    <p className='text-2xl hover:text-red-600 font-bold text-center mt-6'>Mobile Phone</p>
                    <p className='text-center mt-4'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore fugiat nulla dolor atur</p>
                    <p></p>
                </Link>
             </div>             
        </div>
        <div>
            <Subscription/>
            <Testimonial/>
        </div>
    </div>
  )
}

export default Solution