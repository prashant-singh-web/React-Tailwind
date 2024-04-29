import React from 'react'
import { NavLink } from 'react-router-dom'
import LANDING_PAGE_1 from './Landingpage1.js'

function LANDING_PAGE() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Landing page</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Landing page</p>
       <LANDING_PAGE_1/>
       
        
    </div>
  )
}

export default LANDING_PAGE