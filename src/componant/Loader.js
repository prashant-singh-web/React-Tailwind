import React from 'react'

function Loader() {
  return (
    <div className="w-full overflow-y-scroll flex flex-col">
      <p className='w-full text-center py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2'>loader component</p>
      <div className='w-full  p-5 grid grid-cols-4 gap-5 '>
        {/* first loader */}
        <div className="w-full h-[200px] relative bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="p-5 animate-spin border-[6px] border-black rounded-full border-l-transparent"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>spin</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="p-5 animate-bounce  rounded-full bg-black"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>bounce</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="p-3 duration-300 animate-ping  rounded-full bg-black"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>fading</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="w-32 h-32 duration-300 animate-pulse   bg-gray-400"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>sklenton</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="blink h-1 w-full   bg-blue-700"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>blink</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="flex flex-row">
            <div className="google google-deley-1 p-2 rounded-full mr-1 bg-red-700"></div>
            <div className="google google-deley-2 p-2 rounded-full mr-1  bg-yellow-500"></div>
            <div className="google google-deley-3 p-2 rounded-full mr-1 bg-green-700"></div>
            <div className="google google-deley-4 p-2 rounded-full mr-1 bg-blue-800"></div>
          </div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>google</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-dotted border-black border-[4px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 1</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-l-blue-700 border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 1</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-gray-200  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-l-transparent border-r-transparent border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 2</p>
        </div>
        
        
    </div>
    </div>
  )
}

export default Loader