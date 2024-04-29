import React from 'react'
import "../css/navbar.css"
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
// import Navbar4 from './Navbar_component/Navbar4'

function Navbars() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Navbars</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Navbars</p>
       <Navbar1/>
       <Nav/>
       <Navbar2/>
       <Navbar3/>
       
       
        
    </div>
  )
}

export default Navbars