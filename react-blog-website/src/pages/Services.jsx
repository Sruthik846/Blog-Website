import React from 'react'
import ServicesPage from '../components/ServicesPage'

const Services = () => {
  return (
    <div>
        <div className=' py-40 bg-black text-white text-center'> 
          <h2 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'>Services Page</h2>
        </div>

        <div className=' mx-auto max-w-7xl p-5 md:p-0'>
          <ServicesPage />
        </div>
    </div>
  )
}

export default Services