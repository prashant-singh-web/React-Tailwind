import React from 'react'
import { NavLink } from 'react-router-dom'
import Stats1 from './Stats1'
import Stats2 from './Stats2'

function Stats() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/stats</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Stats</p>
        <Stats1/>
        <Stats2/>
    </div>
  )
}

export default Stats