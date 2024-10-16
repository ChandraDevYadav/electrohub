import React from 'react'
import { BiHeadphone } from 'react-icons/bi'
import { LuCalendarDays } from 'react-icons/lu'
import { RiCurrencyLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const BookService = () => {
    return (
        <div>
            <div className='bg-cover bg-center px-4 md:px-36 py-4 md:py-12' style={{ backgroundImage: "url('/core-services-bg.jpg')" }}>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div>
                        <div className='flex justify-start items-center gap-4 mt-6'>
                            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
                            <h1 className='text-red-600 text-xl text-center font-medium'>BOOK A SERVICES</h1>
                        </div>
                        <p className='text-4xl font-bold text-black my-4'>Flexible Repair Options <br className='hidden md:block'/> That Work For You</p>
                    </div>
                    <div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit doloremque on <br className='hidden md:block'/> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis <br className='hidden md:block'/> et quasi architecto beatae vitae dicta sunt explicabo. enim ipsam <br className='hidden md:block'/> voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6 md:mt-16">
                    <div className=''>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                            <div className='px-6 py-8 rounded-md bg-white shadow-sm'>
                                <div className='flex justify-center items-center py-2 bg-red-600 w-1/5 rounded-lg'>
                                    <LuCalendarDays className='text-5xl md:text-3xl text-white'/>
                                </div>
                                <p className='text-black text-xl font-bold my-4'>12 Months Warranty</p>
                                <p className='text-gray-600 text-md'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore</p>
                            </div>
                            <div className='px-6 py-8 rounded-md bg-white shadow-sm'>
                                <div className='flex justify-center items-center py-2 bg-red-600 w-1/5 rounded-lg'>
                                    <RiCurrencyLine className='text-5xl md:text-3xl text-white'/>
                                </div>
                                <p className='text-black text-xl font-bold my-4'>12 Months Warranty</p>
                                <p className='text-gray-600 text-md'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore</p>
                            </div>
                            <div className='px-6 py-8 rounded-md bg-white shadow-sm'>
                                <div className='flex justify-center items-center py-2 bg-red-600 w-1/5 rounded-lg'>
                                    <TbTruckDelivery className='text-5xl md:text-3xl text-white'/>
                                </div>
                                <p className='text-black text-xl font-bold my-4'>12 Months Warranty</p>
                                <p className='text-gray-600 text-md'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore</p>
                            </div>
                            <div className='px-6 py-8 rounded-md bg-white shadow-sm'>
                                <div className='flex justify-center items-center py-2 bg-red-600 w-1/5 rounded-lg'>
                                    <BiHeadphone className='text-5xl md:text-3xl text-white' />
                                </div>
                                <p className='text-black text-xl font-bold my-4'>12 Months Warranty</p>
                                <p className='text-gray-600 text-md'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/book-service-img-1.jpg" className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookService