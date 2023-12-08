import React from 'react'
import { FaTwitter,FaFacebook,FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='mb-8 grid lg:grid-cols-6'> 
                <div className='grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4'>
                    <div>
                        <p className=' tracking-wide font-medium text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                            </li>
                        </ul>
                    </div>

                    {/* Category 2 */}
                    <div>
                        <p className=' tracking-wide font-medium text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Ecommerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainments</a>
                            </li>
                        </ul>
                    </div>

                    {/* Category 3 */}
                    <div>
                        <p className=' tracking-wide font-medium text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Ecommerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainments</a>
                            </li>
                        </ul>
                    </div>

                    {/* Category 4 */}
                    <div>
                        <p className=' tracking-wide font-medium text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Ecommerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainments</a>
                            </li>
                        </ul>
                    </div>   
                </div>

                {/* Subscribe */}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className=' tracking-wide font-medium text-gray-300'>Subscribe for Updates</p>
                    <form className='mt-4 flex flex-col md:flex-row'>
                        <input type="email" id="email" name='email' className='flex-grow w-full px-4 h-12 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm
                        aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                        <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:outline-none border hover:bg-orange-500'>Subscribe</button>
                    </form>
                    <p className='mt-4 text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis non sunt tenetur accusantium vel tempore deleniti unde, quasi quisquam necessitatibus alias ducimus est omnis. 
                        Distinctio placeat quis blanditiis corrupti?</p>
                </div>
            </div>

            <div className='flex flex-col justify-between pb-10 pt-5 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-500'>©Copyright 2023 | All rights reserved</p>

                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                        <FaTwitter className='h-6 w-6' />
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                        <FaFacebook className='h-6 w-6' />
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                        <FaInstagram className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer