import React from 'react'
import { NavLink } from 'react-router-dom'
import Toggle1 from './Toggle1'
import Toggle2 from './Toggle2'
import Toggle3 from './Toggle3'
import Toggle4 from './Toggle4'




function Buttun() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Buttuns</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Buttuns</p>

      
        <Toggle1/>
        <Toggle2/>
        <Toggle3/>
        <Toggle4/>
       
    </div>
  )
}

export default Buttun