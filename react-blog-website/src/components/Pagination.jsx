import React from 'react'
import '../App.css'

const Pagination = ({onPageChange,blogs,pageSize,currentPage}) => {
    const totalPages = Math.ceil(blogs.length /pageSize);
    
    const renderPaginationLinks = () => {
        return Array.from({length:totalPages}, (_,i) => i + 1).map((pageNumber) =>(
            <li key={pageNumber} className={ pageNumber === currentPage ? "activepagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className=' pagination my-8 flex-wrap gap-4 '>
        <li>
            <button onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previuos</button>
        </li>
        <div className='flex gap-1'>
            {renderPaginationLinks()}
        </div>
        <li>
            <button onClick={()=> onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
    
  )
}

export default Pagination