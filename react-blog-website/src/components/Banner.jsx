import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className=' px-6 py-32 bg-black mx-auto'>
        <div className=' text-white text-center'>
            <h1 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'>Welcome to our Blog</h1>
            <p className=' text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate . 
            </p>
            <div>
                <Link to='/' className=' font-medium hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight className='mt-1 ml-1' /></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner