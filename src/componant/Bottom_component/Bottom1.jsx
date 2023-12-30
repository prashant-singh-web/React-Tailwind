import React from 'react'

function Bottom1() {
  return (
    <div className='w-full flex py-4 bg-white flex-col justify-center items-center '>
        <div className="w-[70%] grid grid-cols-3">
            <p className='text-2xl font-bold text-left'>React-Tailwind</p>
            <ul className='flex flex-col text-left text-base font-medium'>
                <li className='hover:text-violet-700 duration-200 ease-linear cursor-pointer'>Home</li>
                <li className='hover:text-violet-700 duration-200 ease-linear cursor-pointer'>About</li>
                <li className='hover:text-violet-700 duration-200 ease-linear cursor-pointer'>Carrear</li>
                <li className='hover:text-violet-700 duration-200 ease-linear cursor-pointer'>Blog</li>

            </ul>
            <div className="w-full flex flex-col text-left">
              <p className='text-sm mt-1 font-medium'>Abc,road no322,mumbai,india,220202</p>
              <p className='text-sm mt-1 font-medium'>test@gmail.com</p>
              <p className='text-sm mt-1 font-medium'>547873498/34798378</p>
              <div className="flex w-fit mt-2 border-2 border-black overflow-hidden">
                <input type="text" className='outline-none px-1 w-auto'/> <button className='py-1 w-fit text-sm px-2 bg-black text-white'>Subscribe</button>
              </div>
            </div>
        </div>
        <p className='my-4 mt-8 text-sm font-normal'>@copyright since 2019 - {new Date().getFullYear()}</p>
    </div>
  )
}

export default Bottom1