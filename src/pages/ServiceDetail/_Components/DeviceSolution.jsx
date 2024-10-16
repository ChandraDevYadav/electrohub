import React from 'react'

const DeviceSolution = () => {
  return (
    <div>
        <div className="flex gap-2 md:gap-4 justify-center items-center mt-10 md:mt-24 ">
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
                <h1 className="text-red-600 font-medium">WHAT WE FIXING</h1>
                <div className="w-8 md:w-12 rounded-full h-[2px] bg-red-600"></div>
            </div>
            <p className='text-center text-5xl font-bold mt-6 text-black'>Providing device solutions</p>
            <p className='text-center mt-5 text-black'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
            eu fugiat nulla dolor atur with Lorem ipsum is simply</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-20 px-4 md:px-36 py-4 md:py-24">
                <div className='col-span-5 md:col-span-2'>
                    <div>
                    <div className=''>
                        <img src="/team-1-2.jpg" className='w-full h-1/2 rounded-md' alt="" />
                    </div>
                    </div>
                </div>
                <div className='col-span-5 md:col-span-3'>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-10 mt-4'>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/mcr.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Cracked Screen</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/mc.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Charging Repair</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-10'>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/repla.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Battery Replacement</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/sn.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Speaker Not Working</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12 mb-10'>
                    <div className='flex justify-center items-center gap-6'> 
                        <div>
                            <img src="/osu.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>OS Update</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/hj.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Headphone Jack</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>
                    <div className='flex justify-center items-center gap-6'>
                        <div>
                            <img src="/wd.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Water Damage</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div className=''>
                            <img src="/wb.png" className='w-28 md:w-20 h-28 md:h-20' alt="" />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Wifi / Bluetooth</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeviceSolution