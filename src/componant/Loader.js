import React from 'react'
import { NavLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function Loader() {
  
  return (
    <div className="w-full overflow-y-scroll flex flex-col dark:bg-[#111827]">
       <div className='w-full flex flex-col justify-center p-10 dark:bg-[#111827] bg-white  xsm:p-2 md:p-5 lg:p-10'>
          <p className=' text-left my-1 text-sm font-semibold text-gray-600'><NavLink to="/" className="mr-3 hover:text-blue-700">Home</NavLink>/  Loader</p>
          <p className='text-left  my-1 font-sans text-3xl font-bold dark:text-gray-400'>Loader</p>
      </div>
     
      <div className='w-full  p-5 grid grid-cols-2 gap-5   h-fit '>
        {/* first loader */}
        <div className="w-full h-[200px] relative bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        
          <div className="p-5 animate-spin border-[6px] border-black rounded-full border-l-transparent"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>spin</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="p-5 animate-bounce  rounded-full bg-black"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>bounce</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="p-3 duration-300 animate-ping  rounded-full bg-black"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>fading</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="w-32 h-32 duration-300 animate-pulse   bg-gray-400"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>sklenton</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="blink h-1 w-full   bg-blue-700"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>blink</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
          <div className="flex flex-row">
            <div className="google google-deley-1 p-2 rounded-full mr-1 bg-red-700"></div>
            <div className="google google-deley-2 p-2 rounded-full mr-1  bg-yellow-500"></div>
            <div className="google google-deley-3 p-2 rounded-full mr-1 bg-green-700"></div>
            <div className="google google-deley-4 p-2 rounded-full mr-1 bg-blue-800"></div>
          </div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>google</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-dotted border-black border-[4px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane </p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-l-blue-700 border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 1</p>
        </div>
        {/* first loader */}
        <div className="w-full relative h-[200px] bg-white/50   border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
        <div className="p-4 border-l-transparent border-r-transparent border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
          <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 2</p>
        </div>
        
        
    </div>
    <div className="w-full flex flex-col h-[80vh]">
          <p className='py-2 text-xl font-semibold'>Loader Code</p>
          <SyntaxHighlighter language='javascript' style={oneDark}>
         {`  
         import React from 'react'
       
         function Loader() {
           
           return (
             <div className="w-full overflow-y-scroll flex flex-col">
               <p className='w-full text-center relative py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2 xsm:text-lg'>loader component</p>
               <div className='w-full  p-5 grid grid-cols-1 gap-5  '>
                 {/* spin loader */}
                 <div className="w-full h-[200px] relative bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                 
                   <div className="p-5 animate-spin border-[6px] border-black rounded-full border-l-transparent"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>spin</p>
                 </div>
                 {/* bounce loader */}
                 <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                   <div className="p-5 animate-bounce  rounded-full bg-black"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>bounce</p>
                 </div>
                 {/* fading loader */}
                 <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                   <div className="p-3 duration-300 animate-ping  rounded-full bg-black"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>fading</p>
                 </div>
                 {/* skelton loader */}
                 <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                   <div className="w-32 h-32 duration-300 animate-pulse   bg-gray-400"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>sklenton</p>
                 </div>
                 {/* blink loader */}
                 <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                   <div className="blink h-1 w-full   bg-blue-700"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>blink</p>
                 </div>
                 {/* google loader */}
                 <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                   <div className="flex flex-row">
                     <div className="google google-deley-1 p-2 rounded-full mr-1 bg-red-700"></div>
                     <div className="google google-deley-2 p-2 rounded-full mr-1  bg-yellow-500"></div>
                     <div className="google google-deley-3 p-2 rounded-full mr-1 bg-green-700"></div>
                     <div className="google google-deley-4 p-2 rounded-full mr-1 bg-blue-800"></div>
                   </div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>google</p>
                 </div>
                 {/* plane loader */}
                 <div className="w-full relative h-[200px] bg-white/50 border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                 <div className="p-4 border-dotted border-black border-[4px] motion-safe:animate-spin duration-500 rounded-full"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane </p>
                 </div>
                 {/* plane 1 loader */}
                 <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                 <div className="p-4 border-l-blue-700 border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 1</p>
                 </div>
                 {/* plan 2 loader */}
                 <div className="w-full relative h-[200px] bg-white/50  border border-gray-300 grid place-items-center hover:shadow-xl ease-linear duration-300 cursor-pointer hover:bg-white  rounded-md">
                 <div className="p-4 border-l-transparent border-r-transparent border-black border-[6px] motion-safe:animate-spin duration-500 rounded-full"></div>
                   <p className='absolute capitalize text-sm font-bold text-gray-700 bottom-3 left-0 w-full text-center'>plane 2</p>
                 </div>
                 
                 <div className="w-full flex "></div>
             </div>
             </div>
           )
         }
         
         export default Loader


        //  some css classes
        // for blink loader
        .blink {
          animation-name: blink;
          animation-duration: 1s;
          animation-direction: linear;
          animation-iteration-count: infinite;
        }
        @keyframes blink {
          10%,
          100% {
            width: 100%;
          }
          50% {
            width: 0%;
          }
        }
        // for google loader
        .google {
          animation-name: dart;
          animation-duration: 0.8s;
          animation-direction: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes dart {
          10% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .google-deley-1 {
          animation-delay: 0ms;
        }
        .google-deley-2 {
          animation-delay: 100ms;
        }
        .google-deley-3 {
          animation-delay: 200ms;
        }
        .google-deley-4 {
          animation-delay: 300ms;
        }
         `}
          </SyntaxHighlighter>
        </div>
    </div>
  )
}

export default Loader