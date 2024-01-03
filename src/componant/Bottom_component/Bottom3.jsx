import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Link } from "react-router-dom";

function Bottom3() {
  
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

import { SiTailwindcss } from "react-icons/si";

import { Link } from "react-router-dom";

function Footer() {
  
  
  return (
    <div className="w-full my-5 flex flex-col ">
     
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
        
        <div className="w-full flex flex-col p-6 ">
        <SiTailwindcss className="text-violet-700 text-2xl mt-20 xsm:mt-8" />
        <div className="full grid grid-cols-4 place-items-start py-10 xsm:py-5 xsm:grid-cols-2 xsm:grid-rows-2 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:py-10">
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            
            
           
        </div>
        <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3 pt-2 border-t border-gray-200">
       © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
      </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

           
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full flex flex-col p-6 ">
        <SiTailwindcss className="text-violet-700 text-2xl mt-20 xsm:mt-8" />
        <div className="full grid grid-cols-4 place-items-start py-10 xsm:py-5 xsm:grid-cols-2 xsm:grid-rows-2 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:py-10">
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                </li>
                <li>
                    <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                </li>
            </ul>
            
            
           
        </div>
        <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3 pt-2 border-t border-gray-200">
       © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
      </p>
        </div>
      </div>
    </div>
  );
}

export default Bottom3;
