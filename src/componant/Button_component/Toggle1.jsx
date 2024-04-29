import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Toggle1() {
  const [codeShow, setCodeShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Simple Toggle
        </p>
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
          className={
            codeShow ? "absolute inset-0 overflow-scroll z-[1000]" : "hidden"
          }
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {
    `
    import React, { useState } from "react";

    function Toggle() {
      const [toggle, setToggle] = useState(false);
      return (
        <div className="w-full grid min-h-[40vh] place-items-center">
          <button
            onClick={() => setToggle((toggle) => !toggle)}
            className={
              toggle
                ? "shadow-[2px_2px_2px_gray,inset_2px_2px_2px_gray] before:right-1 relative before:absolute transition-all duration-200 ease-linear  before:top-1 before:p-3 before:rounded-full before:bg-blue-700 before:w-fit p-4 px-10 rounded-2xl my-5 bg-white"
                : "shadow-[-2px_-2px_2px_gray,inset_-2px_-2px_2px_gray] before:left-1 relative before:absolute transition-all duration-200 ease-linear  before:top-1 before:p-3 before:rounded-full before:bg-blue-700 before:w-fit p-4 px-10 rounded-2xl my-5 bg-white"
            }
          ></button>
        </div>
      );
    }
   
    
    export default Toggle;


    
    `

           
        }
          </SyntaxHighlighter>
        </div>
        <div className="w-full grid min-h-[40vh] place-items-center">
          <button
            onClick={() => setToggle((toggle) => !toggle)}
            className={`p-4 px-10 rounded-2xl my-5 bg-white ${
              toggle ? "shadow-[2px_2px_2px_gray,inset_2px_2px_2px_gray] before:right-1" : "shadow-[-2px_-2px_2px_gray,inset_-2px_-2px_2px_gray] before:left-1"
            } relative before:absolute transition-all duration-200 ease-linear  before:top-1 before:p-3 before:rounded-full before:bg-blue-700 before:w-fit`}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Toggle1;
