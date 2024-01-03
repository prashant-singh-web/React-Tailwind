import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Stats2() {
  const state = [
    {
      title: "8000+",
      bottom: "Creators on the platform",
    },
    {
      title: "3%",
      bottom: "Flat platform fee",
    },
    {
      title: "99.9%",
      bottom: "Uptime guarantee",
    },
    {
      title: "$70M",
      bottom: "Paid out to creators",
    },
  ];
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200">Simple with grid</p>
        <div className="flex flex-row bg-gray-100 rounded-md">
          <button
            onClick={() => setCodeShow(false)}
            className={
              !codeShow
                ? " bg-white  rounded-md text-sm font-medium p-1 flex flex-row justify-center items-center border-black border-[1.5px] ring ring-white shadow-md"
                : "  p-1 px-2 text-sm font-semibold flex flex-row justify-center items-center text-gray-800  "
            }
          >
            <LuEye
              className={
                !codeShow
                  ? "text-base mr-2 text-cyan-700 font-bold"
                  : "text-sm mr-2  font-bold"
              }
            />
            Preview
          </button>
          <button
            onClick={() => setCodeShow(true)}
            className={
              codeShow
                ? " bg-white  rounded-md text-sm font-medium p-1 flex flex-row justify-center items-center border-black border-[1.5px] ring ring-white shadow-md"
                : "  p-1 px-2 text-sm font-semibold flex flex-row justify-center items-center text-gray-800  "
            }
          >
            <IoIosCode
              className={
                codeShow
                  ? "text-base mr-2 text-cyan-700 font-bold"
                  : "text-sm mr-2  font-bold"
              }
            />
            Code
          </button>
        </div>
      </div>
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
        <div
          className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
           
           import React, { useState } from "react";
           import { LuEye } from "react-icons/lu";
           import { IoIosCode } from "react-icons/io";
           
           
           
           function Stats() {
             const state = [
               {
                 title: "8000+",
                 bottom: "Creators on the platform",
               },
               {
                 title: "3%",
                 bottom: "Flat platform fee",
               },
               {
                 title: "99.9%",
                 bottom: "Uptime guarantee",
               },
               {
                 title: "$70M",
                 bottom: "Paid out to creators",
               },
             ];
             
             return (
               
                 
                 <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
                   
                   <div className="w-full flex flex-col justify-center items-center px-5 py-32 xsm:py-20 md:py-32 dark:text-white">
                     <div className="w-full flex flex-col">
                       <p className="text-4xl font-bold xsm:text-2xl md:text-4xl">Trusted by creators worldwide</p>
                       <p className="text-base text-gray-700 dark:text-gray-300 mt-3 xsm:text-sm md:text-base">
                         Lorem ipsum dolor sit amet consect adipisicing possimus.
                       </p>
                       <div className="w-full grid grid-cols-4 gap-1 mt-14 place-items-center rounded-lg overflow-x-hidden xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                         {state.map((title, i) => {
                           return (
                             <div
                               key={i}
                               className="flex w-full flex-col bg-gray-100  dark:bg-white/5 py-10"
                             >
                               <p className="text-3xl font-bold xsm:xl md:3xl ">{title.title}</p>
                               <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold xsm:text-xs md:text-sm">
                                 {title.bottom}
                               </p>
                             </div>
                           );
                         })}
                       </div>
                     </div>
                   </div>
                 </div>
               
             );
           }
           
           export default Stats;
           
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-5 py-32 xsm:py-20 md:py-32 dark:text-white">
          <div className="w-full flex flex-col">
            <p className="text-4xl font-bold xsm:text-2xl md:text-4xl">
              Trusted by creators worldwide
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-3 xsm:text-sm md:text-base">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
            <div className="w-full grid grid-cols-4 gap-1 mt-14 place-items-center rounded-lg overflow-x-hidden xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {state.map((title, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full flex-col bg-gray-100  dark:bg-white/5 py-10"
                  >
                    <p className="text-3xl font-bold xsm:xl md:3xl ">
                      {title.title}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold xsm:text-xs md:text-sm">
                      {title.bottom}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats2;
