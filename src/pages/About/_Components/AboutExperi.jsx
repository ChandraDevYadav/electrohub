import React from 'react';

const AboutExperi = () => {
    return (
        <div className="bg-[#2e2e2e]">
            <div className='flex justify-center items-center gap-20 pb-12 md:pb-28 pt-16 md:pt-16 relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0'>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white pb-6 md:pb-0 '>
                    <p className='text-5xl font-bold text-white text-center'>20 <span className='text-red-600'>+</span></p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Glorious Years</p>
                </div>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>2 <span className='text-red-600'>K+</span></p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Happy Customer</p>
                </div>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>5 <span className='text-red-600'>k+</span></p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Service Complete</p>
                </div>
                <div className='px-5 md:px-20 border-b-2 md:border-b-0 py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>99 <span className='text-red-600'>%</span></p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Satisfactions</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutExperi;
