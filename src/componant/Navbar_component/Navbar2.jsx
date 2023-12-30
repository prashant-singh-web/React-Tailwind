import React from 'react'
import { SiTailwindcss } from 'react-icons/si'

function Navbar2() {
  return (
    <div className="w-full h-36 bg-white my-3">
    <div className="w-full flex flex-row justify-around items-center py-2  ">
      <SiTailwindcss className="text-3xl text-violet-800"/>
      <ul className="flex flex-row capitalize text-base font-medium">
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-800 rounded-xl duration-200 ease-linear">home</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-800 rounded-xl duration-200 ease-linear">portfolio</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-800 rounded-xl duration-200 ease-linear">about</li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-800 rounded-xl duration-200 ease-linear">contact</li>
          </ul>
          <button className="py-1 px-3 rounded-lg hover:bg-violet-500 duration-200 ease-in-out bg-violet-700 text-white">log in</button>
    </div>
  </div>
  )
}

export default Navbar2