import React from 'react'
import aboutImg from '../assets/about.png'
import AuthorCard from './AuthorCard'

const AboutPage = () => {
  return (
    <div className='mt-10 mb-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 sm:p-5'>
            {/* about image */}
            <div>
                <img src={aboutImg} alt="Image" className='w-full '/>
            </div>

            {/* about description */}
            <div>
                <h2 className='text-orange-500 font-bold text-xl mb-2 lg:mt-10'>Who we are</h2> 
                <h1 className=' text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 leading-snug'>We Provide High quality Articles & Blogs</h1>
                <p className='text-gray-600 lg:w-4/5 font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi earum, ex beatae ipsam, aliquam veniam velit suscipit repudiandae libero maxime quam ab, unde perferendis eveniet alias modi nesciunt quae. 
                </p> <br />
                <p className='text-gray-600 lg:w-4/5 font-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi earum, ex beatae ipsam, aliquam 
                </p>
            </div>
        </div>

        {/* Top Author section */}
        <div className='mt-5 p-5'>
            <h1 className=' text-3xl lg:text-5xl font-bold py-2 md:py-5 leading-snug border-b-2'>Top Authors</h1>

            {/* Service cards */}
            <div >
                <AuthorCard />
            </div>
        </div>
        
    </div>
  )
}

export default AboutPage