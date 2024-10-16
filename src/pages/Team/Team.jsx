import React from 'react'
import { Link } from 'react-router-dom'
import Experience from '../About/_Components/Experience'
import TeamDesc from './_Components/TeamDesc'
import AboutExperi from '../About/_Components/AboutExperi'
import TeamCard from './_Components/TeamCard'

const Team = () => {
  return (
    <div>
      <div className='bg-cover bg-center py-16 md:py-32' style={{backgroundImage: "url('/counter-one-bg.jpg')"}}>
      <div className='flex justify-center items-center'>
      <div>
      <p className='text-center text-4xl md:text-6xl font-bold text-white'>Team Members</p>
      <p className='text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white'>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
      <div className='flex justify-center items-center mt-3'>
        <p className='text-white text-lg font-medium'><Link href=''>Home </Link>// Team</p>
      </div>
      </div>
      </div>
    </div>
    <div className="grid grid-cols-1">
      <div>
        <TeamDesc/>
       <Experience/>
       <AboutExperi/>
       <div className='px-4 md:px-32 py-4 md:pt-20'>
       <TeamCard/>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Team