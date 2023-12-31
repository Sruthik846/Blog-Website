import React from 'react'

const CategorySelection = ({onSelectCategory,activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center py-5 border-b-2 text-gray-900 font-semibold'>
        <button onClick={() => onSelectCategory(null)} className={`ml-12 ${ activeCategory ? "" : "active-button"}`}>
            All
        </button>
        {
            categories.map((category) =>(
                <button 
                key={category}
                onClick={()=> onSelectCategory(category)}
                className={` mr-2 space-x-16 ${ activeCategory === category ? "active-button" : " "}`}>
                {category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelection