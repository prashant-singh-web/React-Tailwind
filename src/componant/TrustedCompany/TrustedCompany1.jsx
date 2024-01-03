import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaAmazon,  FaGithub, FaGoogle,  FaNode, FaReact } from "react-icons/fa";



function TrustedCompany1() {
  
    const [codeShow, setCodeShow] = useState(false);
    return (
      <div className="w-full my-5 flex flex-col ">
        <div className="w-full flex flex-row justify-between">
          <p className="text-lg font-medium font-sans dark:text-gray-200 ">Simple with heading</p>
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

  import { FaAmazon,  FaGithub, FaGoogle, FaInstagram, FaNode, FaReact, FaTwitter, FaYoutube } from "react-icons/fa";
  
  
  
  function TrustedCompany() {
    
     
      return (
        <div className="w-full my-5 flex flex-col ">
          
          <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
            
            <div className="w-full flex flex-col justify-between items-center py-20 px-8  dark:text-white xsm:flex-col xsm:py-5 md:flex-col md:py-10 lg:py-14 ">
            <p className="text-xl font-semibold xsm:text-base md:text-xl">Trusted by the world’s most innovative teams</p>
          <ul className="w-[80%] place-items-center grid h-fit grid-cols-5 xsm:grid-cols-1 md:grid-cols-5 md:w-[90%]  lg:w-[70%] text-gray-700 dark:text-gray-200">
            <li className="py-10   w-full"><FaGoogle className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
            <li className="py-10   w-full"><FaGithub className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
            <li className="py-10   w-full"><FaNode className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
            <li className="py-10   w-full"><FaReact className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
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
          <div className="w-full flex flex-col justify-between items-center py-20 px-8  dark:text-white xsm:flex-col xsm:py-5 md:flex-col md:py-10 lg:py-14 ">
          <p className="text-xl font-semibold xsm:text-base md:text-xl">Trusted by the world’s most innovative teams</p>
        <ul className="w-[80%] place-items-center grid h-fit grid-cols-5 xsm:grid-cols-1 md:grid-cols-5 md:w-[90%]  lg:w-[70%] text-gray-700 dark:text-gray-200">
          <li className="py-10   w-full"><FaGoogle className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaGithub className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaNode className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaReact className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
          <li className="py-10   w-full"><FaAmazon className="text-5xl m-auto xsm:text-3xl md:text-5xl "/></li>
        </ul>
       
          </div>
        </div>
      </div>
    );
  }

export default TrustedCompany1