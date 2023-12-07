import React from 'react'
import {useLoaderData } from 'react-router-dom'
import { FaUser, FaClock } from 'react-icons/fa6'
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title,image,category,author,published_date,reading_time,content} = data[0]
  return (
    <div>
        <div className=' py-40 bg-black text-white text-center px-4'> 
          <h2 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'>  Single Blog Page</h2>
        </div>

        {/* Blog Details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className=' w-full rounded mx-auto' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-2 text-gray-600'> <FaUser className='inline items-center mr-2' /> {author} | {published_date} </p>
                <p className='mb-2 text-gray-600'> <FaClock className='inline items-center mr-2' /> {reading_time} </p>
                <p className=' text-base text-gray-500 mb-6'>{content}</p>
                <div className=' text-base text-gray-500 mb-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p> <br></br>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p>   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p> <br></br>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa officia cum magni quia, 
                        necessitatibus sapiente repellendus quaerat iste delectus doloribus repellat mollitia vero quidem molestias iusto perspiciatis! Aspernatur, libero.
                    </p> 
                </div>

            </div>

            <div className='lg:w-1/2'>
                <SideBar />
            </div>

        </div>
    </div>
  )
}

export default SingleBlog