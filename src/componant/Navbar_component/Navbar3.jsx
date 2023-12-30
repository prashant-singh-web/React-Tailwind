import React from 'react'
import { SiTailwindcss } from 'react-icons/si'

function Navbar3() {
  return (
    <div className="w-full h-36 bg-white my-3">
    <div className="w-full flex flex-row justify-around items-center py-2  ">
      <SiTailwindcss className="text-3xl text-violet-800"/>
      <ul className="flex flex-row capitalize text-base font-medium">
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">home</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">portfolio</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">about</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">contact</li>
          </ul>
          <div className="flex flex-row group1-focus-within:ring-2 group1-focus-within:ring-green-200">
            <input type="text" name="" id="" className='py-1 px-2 outline-none border border-green-700 rounded-l-sm focus-within:ring-2 focus-within:ring-green-100 peer' />
          <button className="py-1 px-3  hover:bg-green-500 duration-200 ease-in-out bg-green-700 text-white ">search</button>
          </div>
    </div>
  </div>
  )
}

export default Navbar3