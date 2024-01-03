import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { NavLink } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
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

        <li
          className={
            dropdown
              ? " px-3  flex text-white justify-center items-center text-center flex-row cursor-pointer bg-blue-700 relative    duration-200 ease-linear transition xsm:ease-in-out delay-150  xsm:flex-col"
              : "  px-3 flex justify-center items-center flex-row cursor-pointer text-blue-700 hover:bg-blue-700 relative hover:text-white  duration-200 ease-linear"
          }
          onClick={() => setDropdown((dropdown) => !dropdown)}
        >
         <p className="flex h-fit py-1 text-sm flex-row justify-center items-center"> Component{" "}
          {!dropdown ? (
            <IoIosArrowDown className="text-sm text-center ml-2" />
          ) : (
            <IoIosArrowUp className="text-sm text-center ml-2" />
          )}</p>
          <ul
            className={
              dropdown
                ? "w-[150px] text-white flex flex-col z-[100]   absolute top-8 left-0  xsm:w-full xsm:static xsm:h-fit md:absolute  md:top-8 lg:top-7"
                : "h-0 hidden"
            }
          >
            <NavLink
              to="/loader"
              className={
                dropdown
                  ? "dropdown  w-full py-1  hover:bg-blue-600 text-sm capitalize font-medium bg-blue-700 "
                  : " w-full py-1 text-white text-sm capitalize font-medium hover:bg-blue-700 hover:text-white"
              }
            >
              Loader
            </NavLink>
            <NavLink
              to="/navbar"
              className={
                dropdown
                  ? "dropdown dropdeley  w-full py-1 hover:bg-blue-600 text-sm capitalize font-medium bg-blue-700 text-white"
                  : " "
              }
            >
              Navbar
            </NavLink>
            <NavLink
              to="/profile"
              className={
                dropdown
                  ? "dropdown dropdeley1  w-full py-1 hover:bg-blue-600 text-sm capitalize font-medium bg-blue-700 text-white"
                  : " "
              }
            >
              User Info
            </NavLink>
            <NavLink
              to="/inputcard"
              className={
                dropdown
                  ? "dropdown dropdeley2 w-full py-1 hover:bg-blue-600 text-sm capitalize font-medium bg-blue-700 text-white"
                  : " "
              }
            >
              Input form
            </NavLink>
            <NavLink
              to='/trustedCompany'
              className={
                dropdown
                  ? "dropdown dropdeley2 w-full py-1 hover:bg-blue-600 text-sm capitalize font-medium bg-blue-700 text-white"
                  : " "
              }
            >
              Trusted
            </NavLink>
          </ul>
          
        </li>
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
