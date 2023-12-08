import React from 'react'
import ContactPage from '../components/ContactPage'

const Contact = () => {
  return (
    <div>
        <div className=' py-40 bg-black text-white text-center'> 
          <h2 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'> Contact Us Page</h2>
        </div>

        <div className=' mx-auto max-w-7xl p-5 md:p-0'>
          <ContactPage />
        </div>
    </div>
  )
}

export default Contact