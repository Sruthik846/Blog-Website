import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
        <div className=' py-40 bg-black text-white text-center'> 
          <h2 className=' text-5xl lg:text-7xl font-bold mb-5 leading-snug'>Blog Page</h2>
        </div>

        {/* all blog container */}
        <div className=' mx-auto max-w-7xl'>
          <BlogPage></BlogPage>   
        </div>
    </div>
  )
}

export default Blogs