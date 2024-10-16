import React from 'react'

const ContactUs = () => {
  return (
    <div  className="relative bg-cover bg-center px-4 md:px-36 pt-10 pb-[35rem] md:pb-[30rem]"
    style={{ backgroundImage: 'url("/contact-one-bg.jpg")' }}>
        <div className='pt-24'>
          <div className='flex justify-center items-center gap-4'>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
            <h1 className='text-red-600 text-xl text-center font-medium'>CONTACT US</h1>
            <div className="w-12 rounded-full h-[2px] bg-red-600"></div>
          </div>
          <p className='text-4xl font-bold text-center text-white mt-4'>Let Us Know Or Call Us At</p>
          <p className='text-white text-center font-medium mt-5 mb-10'>Duis aute irure dolor in repreh enderit in volup tate velit esse cillum dolore <br />
          eu fugiat nulla dolor atur with Lorem ipsum is simply</p>
        </div>
        <div className='absolute'>
            <div className='flex flex-col md:flex-row justify-center md:justify-center items-center gap-6 bg-transparent'>
                <input type="text" placeholder='Your Name' className='px-4 py-4 border rounded-md placeholder-white bg-transparent border-gray-300 w-80 md:w-96' />
                <input type="email" placeholder='Email Address' className='px-4 py-4 border rounded-md bg-transparent placeholder-white border-gray-300 w-80 md:w-96' />
                <input type="text" placeholder='Subject' className='px-4 py-4 border rounded-md bg-transparent placeholder-white border-gray-300 w-80 md:w-96' />
            </div>
            <textarea name="Comment" id="" placeholder='Comment' rows={6} className='px-4 py-4 mt-8 border rounded-md bg-transparent placeholder-white border-gray-300 w-full'></textarea>
            <div className='flex justify-start items-center'>
            <button className="relative bg-red-600 text-white mt-6 font-bold px-12 py-4 rounded-md overflow-hidden group">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-[#171a1d] transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs