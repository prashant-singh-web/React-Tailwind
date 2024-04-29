import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {  NavLink } from "react-router-dom";

function ErrorPage1() {
  
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
      <div className="w-full mt-5 rounded-md h-full   bg-white dark:bg-[#111827] border border-gray-400 relative">
        <div
          className={codeShow ? "absolute inset-0 z-50 min-h-[100vh] overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`

function ErrorPage (){
  return (
    <div className="w-full min-h-[100vh] grid place-items-center text-black dark:text-white">
    <div className="flex flex-col">
        <p className="text-5xl font-mono animate-bounce font-black">404</p>
        <p className="text-lg font-semibold">Connection lost ? please go back</p>
        <NavLink className="py-2 px-4 text-sm font-semibold bg-blue-500 text-white mt-5" to="/" >Home</NavLink>
    </div>
</div>
  )
}
export default ErrorPage
           
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full min-h-[100vh] grid place-items-center text-black dark:text-white">
            <div className="flex flex-col">
                <p className="text-5xl font-mono animate-bounce font-black">404</p>
                <p className="text-lg font-semibold">Connection lost ? please go back</p>
                <NavLink className="py-2 px-4 text-sm font-semibold bg-blue-500 text-white mt-5" to="/" >Home</NavLink>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage1;
