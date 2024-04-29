import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { NavLink } from "react-router-dom";


import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
 
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-full flex flex-row dark:bg-[#111827] dark:border-b dark:border-gray-700 relative justify-between items-center py-2 px-5  bg-white  ">
      <p className=" p-1 text-lg uppercase font-bold text-left text-blue-700 ">
        react-tailwind
      </p>

      <div className={!toggle ? " flex flex-row text-center justify-center xsm:absolute  xsm:z-[1000] xsm:top-9 xsm:left-0 xsm:w-full xsm:h-fit transition ease-in-out delay-150 duration-200  xsm:pb-10 xsm:pt-2 xsm:bg-white xsm:dark:bg-[#111827] xsm:flex-col  xsm:border-b-2 md:static md:w-fit md:flex-row md:border-b-0 md:pb-0  " : " flex flex-row text-center justify-center   xsm:hidden md:static md:flex transition ease-in-out delay-150 duration-200   md:w-fit md:flex-row md:border-b-0 md:pb-0 "}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
              : " capitalize text-sm px-4 text-blue-700 py-1 h-fit"
          }
          to="/"
        >
          home
        </NavLink>
       
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
              : " capitalize text-sm px-4 text-blue-700 py-1 h-fit"
          }
          to="/tools"
        >
          Tools
        </NavLink>

       
        <ul className="flex flex-row justify-center items-center text-sm ml-8 xsm:mt-8 md:mt-0 text-blue-700 font-semibold capitalize">
        
        <li className="ml-2 font-bold text-xl hover:text-black duration-200 ease-linear cursor-pointer dark:hover:text-gray-500 ">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prashant-singh-web"
          >
            <FaGithub />
          </a>
        </li>
        <li className="ml-2 font-bold text-xl hover:text-black duration-200 ease-linear cursor-pointer dark:hover:text-blue-500" >
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prashant-singh-web"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="ml-2 font-bold text-xl hover:text-black duration-200 ease-linear cursor-pointer dark:hover:text-violet-500">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prashant-singh-web"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="ml-2 font-bold text-xl hover:text-black duration-200 ease-linear cursor-pointer dark:hover:text-red-500">
          {" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/prashant-singh-web"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      </div>
      
      {
        !toggle ?  <IoCloseSharp className="xsm:static md:hidden text-blue-800 mr-4" onClick={()=>setToggle(toggle => !toggle)} /> : <RxHamburgerMenu className="xsm:static md:hidden text-blue-800 mr-4" onClick={()=>setToggle(toggle => !toggle)} /> 
      }
    </div>
  );
}

export default Navbar;
