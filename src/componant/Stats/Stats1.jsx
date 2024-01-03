import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Stats1() {
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full my-5 flex flex-col dark:bg-[#111827]">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-300">Simple</p>
        <div className="flex flex-row bg-gray-100  rounded-md">
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
        <div className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";
function Stats() {
  
  return (
    <div className="w-full my-5 flex flex-col ">
      
      <div className="w-full mt-5 rounded-md  bg-white border border-gray-400 relative">
       
        <div className="w-full grid grid-cols-3 place-items-center xsm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-20 ">
                <p className="font-bold text-3xl xsm:text-xl md:text-2xl">44 million</p>
                <p className="text-sm font-medium text-gray-600 xsm:text-xs md:text-sm">Transactions every 24 hours</p>
            </div>
            <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-20">
                <p className="font-bold text-3xl xsm:text-xl md:text-2xl">$119 trillion</p>
                <p className="text-sm font-medium text-gray-600 xsm:text-xs md:text-sm">Assets under holding</p>
            </div>
            <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-20">
                <p className="font-bold text-3xl xsm:text-xl md:text-2xl">46,000</p>
                <p className="text-sm font-medium text-gray-600 xsm:text-xs md:text-sm">New users annually</p>
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
        <div className="w-full grid grid-cols-3 place-items-center xsm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 dark:text-white ">
          <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-28 ">
            <p className="font-bold text-3xl xsm:text-xl md:text-2xl lg:text-4xl">
              44 million
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 xsm:text-xs md:text-sm">
              Transactions every 24 hours
            </p>
          </div>
          <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-28">
            <p className="font-bold text-3xl xsm:text-xl md:text-2xl lg:text-4xl">
              $119 trillion
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 xsm:text-xs md:text-sm">
              Assets under holding
            </p>
          </div>
          <div className=" w-full flex flex-col justify-center items-center py-16 xsm:py-10 md:py-16 lg:py-28">
            <p className="font-bold text-3xl xsm:text-xl md:text-2xl lg:text-4xl">46,000</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 xsm:text-xs md:text-sm">
              New users annually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats1;
