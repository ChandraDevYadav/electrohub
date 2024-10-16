import React from 'react';

const InfoSection = () => {
    return (
        <div className="relative h-full md:h-64 pb-16 md:pb-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/counter-one-bg.jpg")' }}>
            
            {/* Overlay with red background and opacity */}
            <div className="absolute inset-0 bg-red-600 opacity-60"></div>

            <div className='flex justify-center items-center gap-20 pt-16 md:pt-20 relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0'>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white pb-6 md:pb-0 '>
                    <p className='text-5xl font-bold text-white text-center'>20+</p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Glorious Years</p>
                </div>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>2K+</p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Happy Customer</p>
                </div>
                <div className='border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-white py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>5k+</p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Service Complete</p>
                </div>
                <div className='px-5 md:px-20 border-b-2 md:border-b-0 py-6 md:py-0'>
                    <p className='text-5xl font-bold text-white text-center'>99%</p>
                    <p className='text-2xl text-white font-medium mt-4 text-center'>Satisfactions</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default InfoSection;
