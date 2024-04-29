import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageBox1 from './ImageBox1'


function ImageBox() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white  xsm:p-2 md:p-5 lg:p-10'>
          <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  ImageBox</p>
          <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>ImageBox</p>
          <ImageBox1/>
  
  
      
        
      </div>
  )
}

export default ImageBox