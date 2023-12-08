import React from 'react'
import AboutPage from '../components/AboutPage'

const About = () => {
  return (
    <div>
        <div className=' py-40 bg-black text-white text-center'> 
          <h2 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'>About Us Page</h2>
        </div>

        {/* About page */}
        <div className=' mx-auto max-w-7xl p-5 md:p-0'>
          <AboutPage />
        </div>

        
    </div>
  )
}

export default About