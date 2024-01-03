import React from 'react';
import Bottom1 from './Bottom1';
import Bottom2 from './Bottom2';
import { NavLink } from 'react-router-dom';
import Bottom3 from './Bottom3';
import Bottom4 from './Bottom4';
import Bottom5 from './Bottom5';





function Bottom() {
  return (
    <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white overflow-y-scroll xsm:p-2 md:p-5 lg:p-10'>
        <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Footers</p>
        <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Footers</p>
        <Bottom1/>
        <Bottom2/>
        <Bottom3/>
        <Bottom4/>
        <Bottom5/>
       
        
    </div>
  )
}

export default Bottom