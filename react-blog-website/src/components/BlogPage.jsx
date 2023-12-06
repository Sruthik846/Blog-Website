import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //Blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs (){
            let url = `http://localhost:5000/blogs?${currentPage}&limit=${pageSize}`;

            if (selectedCategory){
                url +=`&category= ${selectedCategory}`;
            }
            const response = await fetch(url);
            const data =await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage,pageSize,selectedCategory])

    // page changing button
    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    
  return (
    <div>
        {/* category section */}
        <div>
            Page category
        </div>

        {/* blog cards section */}
        <div> <BlogCards blogs={blogs} currentpage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}></BlogCards></div>

        {/* pagination section */}
        <div>
            <Pagination onPageChange={handlePageChange} blogs={blogs} pageSize={pageSize} currentPage={currentPage} />
        </div>
    </div>
  )
}

export default BlogPage