import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Bottom1() {
  
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
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
        <div
          className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
import React, { useState } from "react";

// from react icon
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  
  
  return (
    <div className="w-full my-5 flex flex-col ">
      
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
       
        <div className="w-full flex flex-row justify-between items-center py-10 px-8  dark:text-white xsm:flex-col xsm:py-5 md:flex-row md:py-10 lg:py-14 ">
        <ul className="w-[60%] grid grid-cols-6 place-items-center  text-gray-500 dark:text-gray-600 text-sm gap-y-5 xsm:grid-cols-3 xsm:w-[90%] md:grid-cols-6 md:w-[80%] lg:w-[60%]">
          {/* put your page route to="route" */}
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">About</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Blog</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Jobs</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Press</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Accessibility</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Partners</NavLink></li>
      </ul>
      <ul className="flex flex-row space-x-10 text-gray-400 text-xl my-10 xsm:space-x-7 md:space-x-10">
        {/* put your url in href="url" */}
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaInstagram/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaFacebook/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaTwitter/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaGithub/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaYoutube/></a></li>
      </ul>
      <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3">
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
        <div className="w-full flex flex-col justify-between items-center py-20 px-8  dark:text-white xsm:flex-col xsm:py-5 md:flex-col md:py-10 lg:py-14 ">
        <ul className="w-[60%] grid grid-cols-6 place-items-center  text-gray-500 dark:text-gray-600 text-sm gap-y-5 xsm:grid-cols-3 xsm:w-[90%] xsm:text-xs md:text-sm md:grid-cols-6 md:w-[80%] lg:w-[60%]">
          {/* put your page route to="route" */}
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">About</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Blog</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Jobs</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Press</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Accessibility</NavLink></li>
        <li><NavLink to="/home" className="hover:text-gray-800 dark:hover:text-gray-400 duration-200 ease-linear">Partners</NavLink></li>
      </ul>
      <ul className="flex flex-row space-x-10 text-gray-400 text-xl my-10 xsm:space-x-7 md:space-x-10">
        {/* put your url in href="url" */}
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaInstagram/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaFacebook/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaTwitter/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaGithub/></a></li>
        <li><a href="/home" className="hover:text-gray-600 dark:hover:text-gray-400 duration-200 ease-linear"><FaYoutube/></a></li>
      </ul>
      <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3">
       © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
      </p>
        </div>
      </div>
    </div>
  );
}

export default Bottom1;
