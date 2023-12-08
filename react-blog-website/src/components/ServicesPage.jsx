import React from 'react'
import ServiceCards from './ServiceCards'

const ServicesPage = () => {
  return (
    <div>
        <div className='text-center'>
           <h2 className='text-orange-500 font-bold text-xl mt-10 lg:mt-20 mb-2'>Our Services</h2> 
           <h1 className=' text-3xl lg:text-5xl font-bold mb-3 leading-snug'>What We Offer</h1>
           <p className='text-gray-600 lg:w-3/5 mx-auto mb-5 font-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </div>

        {/* Service cards */}
        <div className=' flex flex-col lg:flex-row gap-12'>
            <ServiceCards />
        </div>
    </div>
  )
}

export default ServicesPage