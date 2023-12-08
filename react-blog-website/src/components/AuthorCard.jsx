import React from 'react'
import user1 from '../assets/user-01.png'
import user2 from '../assets/user-02.png'
import user3 from '../assets/user-03.png'
import { IoDocumentTextOutline } from "react-icons/io5";

const AuthorCard = () => {
    const data = [
        {id:1,img:user1, name:"Adrio Devid",position:"Director of Operations",count:12},
        {id:2,img:user2, name:"Rayna Mario",position:"Content writer",count:8},
        {id:3,img:user3, name:"Devid Tac",position:"head of Marketing",count:5},
        {id:4,img:user1, name:"Marj Jacob",position:"head of Marketing",count:5},
    ]
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-8 lg:mt-10 mb-10 '>
        { data.map((user) => <div key={user.id} className=' p-8 shadow-lg rounded bg-gray-100 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='items-center justify-center flex'>
                <img src={user.img} alt=""/>
            </div>
            <h2 className='text-gray-800 mt-4 mb-2 font-bold hover:text-orange-500 cursor-pointer text-center text-xl'>{user.name}</h2>
            <h3 className='text-gray-500 mb-2 font-semibold text-center'>{user.position}</h3>
            <p className=' mb-2 text-gray-500 font-semibold items-center justify-center flex gap-2'><IoDocumentTextOutline className='w-5 h-5' /> {user.count} Article Published</p>
        </div>) }
    </div>
  )
}

export default AuthorCard