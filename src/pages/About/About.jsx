import React from 'react'
import { Link } from 'react-router-dom'
import Repair from './_Components/Repair'
import Experience from './_Components/Experience'
import AboutExperi from './_Components/AboutExperi'
import SkillExpertise from '../../Components/SkillExpertise/SkillExpertise'
import MissionVis from './_Components/MissionVis'
import Contact from './_Components/Contact'
import Testimonial from './_Components/Testimonial'
import OurTeam from './_Components/OurTeam'

const About = () => {
  return (
    <div>
      <div className='bg-cover bg-center py-16 md:py-32' style={{backgroundImage: "url('/counter-one-bg.jpg')"}}>
      <div className='flex justify-center items-center'>
      <div>
      <p className='text-center text-4xl md:text-6xl font-bold text-white'>About company</p>
      <p className='text-center text-md md:text-xl mt-3 mx-6 md:mx-0 font-medium text-white'>Professional Smartphone Laptop Repair Services in Germany Since 2000</p>
      <div className='flex justify-center items-center mt-3'>
        <p className='text-white text-lg font-medium'><Link href=''>Home </Link>// About</p>
      </div>
      </div>
      </div>
    </div>
    <div className="grid grid-cols-1">
      <div>
        <Repair/>
        <Experience/>
        <AboutExperi/>
        <SkillExpertise/>
        <MissionVis/>
        <Contact/>
        <Testimonial/>
        <OurTeam/>
      </div>
    </div>
    </div>
  )
}

export default About