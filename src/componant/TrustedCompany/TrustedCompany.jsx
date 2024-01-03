import React from 'react'
import { NavLink } from 'react-router-dom'
import TrustedCompany1 from './TrustedCompany1'
import TrustedCompany2 from './TrustedCompany2'
import TrustedCompany3 from './TrustedCompany3'
import TrustedCompany4 from './TrustedCompany4'
import TrustedCompany5 from './TrustedCompany5'

function TrustedCompany() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Trusted</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Trusted Company</p>
        <TrustedCompany1/>
        <TrustedCompany2/>
        <TrustedCompany3/>
        <TrustedCompany4/>
        <TrustedCompany5/>
        
       
        
    </div>
  )
}

export default TrustedCompany