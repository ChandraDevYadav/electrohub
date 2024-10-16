import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import AboutExperi from '../../Components/AboutExperi.jsx/AboutExperi'
import Introduction from '../../Components/Introduction/Introduction'
import WhyUs from '../../Components/WhyUs/WhyUs'
import Services from '../../Components/Services/Services'
import Frequently from '../../Components/Frequently/Frequently'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Testimonial from '../../Components/Testimonial/Testimonial'
import SkillExpertise from '../../Components/SkillExpertise/SkillExpertise'
import ContactUs from '../../Components/ContactUs/ContactUs'
import OurBlog from '../../Components/OurBlog/OurBlog'
import Subscription from '../../Components/Subscription/Subscription'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <AboutExperi/>
        <Introduction/>
        <WhyUs/>
        <Services/>
        <Frequently/>
        <InfoSection/>
        <Testimonial/>
        <SkillExpertise/>
        <ContactUs/>
        <OurBlog/>
        <Subscription/>
    </div>
  )
}

export default Home