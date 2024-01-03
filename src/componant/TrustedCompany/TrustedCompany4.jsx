import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaAmazon,  FaGithub, FaGoogle, FaNode, FaReact,  } from "react-icons/fa";



function TrustedCompany4() {
  
    const [codeShow, setCodeShow] = useState(false);
    return (
      <div className="w-full my-5 flex flex-col ">
        <div className="w-full flex flex-row justify-between">
          <p className="text-lg font-medium font-sans dark:text-gray-200 ">Split with logos on right</p>
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
             import React from "react";
             import { FaAmazon,  FaGithub, FaGoogle, FaNode, FaReact,  } from "react-icons/fa";
             
             
             
             function TrustedCompany() {
               
                 return (
                   <div className="w-full my-5 flex flex-col ">
                     
                     <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
                      
                       <div className="w-full grid grid-cols-2 py-20 px-8 xsm:grid-cols-1 place-items-center md:grid-cols-2  dark:text-white xsm:flex-col xsm:py-5 md:flex-col md:py-10 lg:py-14 ">
                       <div className="flex flex-col justify-center text-left items-left">
                         <p className="text-3xl font-bold">Trusted by the most innovative teams</p>
                         <p className="text-sm text-gray-700 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
                         <div className="flex"><button className="text-sm p-1 px-3 hover:bg-violet-500 bg-violet-700 rounded-md text-white">Create Account</button> <span className="text-sm ml-3 font-semibold">Contact us →</span></div>
                       </div>
                       <ul className="w-[80%] place-items-center grid h-fit grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 md:w-[90%]  lg:w-[70%] text-gray-700 dark:text-gray-200">
                       <li className="py-10   w-full"><FaGoogle className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                       <li className="py-10   w-full"><FaGithub className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                       <li className="py-10   w-full"><FaNode className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                       <li className="py-10   w-full"><FaReact className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                       <li className="py-10   w-full"><FaAmazon className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                       <li className="py-10   w-full"><FaAmazon className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
                     </ul>
                     
                    
                       </div>
                     </div>
                   </div>
                 );
               }
             
             export default TrustedCompany
          `}
            </SyntaxHighlighter>
          </div>
          <div className="w-full grid grid-cols-2 py-20 px-8 xsm:grid-cols-1 place-items-center md:grid-cols-2  dark:text-white xsm:flex-col xsm:py-5 md:flex-col md:py-10 lg:py-14 ">
          <div className="flex flex-col justify-center text-left items-left">
            <p className="text-3xl font-bold">Trusted by the most innovative teams</p>
            <p className="text-sm text-gray-700 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.</p>
            <div className="flex"><button className="text-sm p-1 px-3 hover:bg-violet-500 bg-violet-700 rounded-md text-white">Create Account</button> <span className="text-sm ml-3 font-semibold">Contact us →</span></div>
          </div>
          <ul className="w-[80%] place-items-center grid h-fit grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 md:w-[90%]  lg:w-[70%] text-gray-700 dark:text-gray-200">
          <li className="py-10   w-full"><FaGoogle className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaGithub className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaNode className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaReact className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaAmazon className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaAmazon className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
        </ul>
        
       
          </div>
        </div>
      </div>
    );
  }

export default TrustedCompany4