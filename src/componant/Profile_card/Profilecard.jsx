import React from 'react'
import ProfileCard1 from './ProfileCard1'
import { NavLink } from 'react-router-dom'
import ProfileCard2 from './ProfileCard2'

function Profilecard() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
    <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Footers</p>
    <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Footers</p>
    <ProfileCard1/>
    <ProfileCard2/>

   
    
</div>
  )
}

export default Profilecard