import React from 'react'
import "./css/navbar.css"
import Navbar1 from './Navbar_component/Navbar1'
import Navbar2 from './Navbar_component/Navbar2'
import Navbar3 from './Navbar_component/Navbar3'
import Navbar4 from './Navbar_component/Navbar4'

function Navbars() {
  return (
    <div className='w-full  flex flex-col p-2 overflow-y-scroll'>
        <p className='w-full text-center py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2'>navbar component</p>
        {/* ist nav */}
        <Navbar1/>
        {/* 2nd nav */}
        <Navbar2/>
        {/* 2nd nav */}
        <Navbar3/>
        {/* 2nd nav */}
        <Navbar4/>
    </div>
  )
}

export default Navbars