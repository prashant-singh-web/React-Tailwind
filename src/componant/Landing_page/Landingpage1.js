import React, { useState } from 'react'
import { IoIosCode } from 'react-icons/io';
import { LuEye } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function LANDING_PAGE_1() {
  
    const [codeShow, setCodeShow] = useState(false);
    return (
      <div className="w-full my-5 flex flex-col ">
        <div className="w-full flex flex-row justify-between">
          <p className="text-lg font-medium font-sans dark:text-gray-200 ">Simple centered</p>
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
        <div className="w-full mt-5 rounded-md overflow-hidden  bg-white dark:bg-[#111827] border border-gray-400 relative">
          <div
            className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}
          >
            <SyntaxHighlighter language="javascript" style={oneDark}>
              {`
 
  
             
          `}
            </SyntaxHighlighter>
          </div>
          <div className="w-full min-h-[100vh] relative z-10 bg-[#009eeb] ">
            <div className="absolute h-1/2 w-1/2 bg-red-900 left-0 top-0 z-0"></div>
          
          </div>
        </div>
      </div>
    );

}

export default LANDING_PAGE_1