import React from 'react'

const ServiceCards = () => {
    const data = [
        {id:1,img:<svg class="h-16 w-16 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg>,title : "Refreshing design", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
        {id:2,img:<svg class="h-16 w-16 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
      </svg>
      ,title : "Based on tailwind css", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
        {id:3,img:<svg class="h-16 w-16 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>,title : "300+ Components", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
        {id:4,img:<svg class="h-16 w-16 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="12" rx="1" />  <line x1="7" y1="20" x2="17" y2="20" />  <line x1="9" y1="16" x2="9" y2="20" />  <line x1="15" y1="16" x2="15" y2="20" /></svg>,title : "Speed Optimized", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
        {id:5,img:<svg class="h-16 w-16 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="6" r="2" />  <circle cx="18" cy="18" r="2" />  <path d="M11 6h5a2 2 0 0 1 2 2v8" />  <polyline points="14 9 11 6 14 3" />  <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />  <polyline points="10 15 13 18 10 21" /></svg>,title : "Fully Customizable", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
        {id:6,img:<svg class="h-16 w-16 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>,title : "Regular updates", content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dignissimos nesciunt quibusdam amet quos numquam eos possimus corporis maxime repellendus deleniti deserunt"},
    ]
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8 lg:mt-12 mb-10'>
        { data.map((obj) => <div key={obj.id} className=' p-5 shadow-lg rounded cursor-pointer
        '>
            <div>
                <div className='w-full'>{obj.img}</div>
            </div>
            <h3 className=' mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer'>{obj.title}</h3>
            <p className=' mb-2 text-gray-500'> {obj.content}</p>
        </div>) }
    </div>
        
  )
}

export default ServiceCards