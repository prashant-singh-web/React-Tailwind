import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./componant/DarkModeSwitcher/Switcher";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function BottomMain() {
  return (
    <div className="w-full flex py-4 bg-gray-100 dark:bg-[#111827] dark:border-t dark:border-gray-700 flex-col justify-center items-center ">
      <div className="w-[80%] grid grid-cols-3 xsm:grid-cols-1 gap-y-5 md:grid-cols-3 lg:w-[70%] ">
        <p className="text-2xl font-bold text-left text-blue-600">
          React-Tailwind
        </p>
        <ul className="flex flex-col text-left text-base font-medium">
          <NavLink
            to="/"
            className="py-1 w-fit capitalize font-bold px-3 text-gray-700 cursor-pointer text-base hover:text-blue-600 "
          >
            Home
          </NavLink>
          <li className="py-1 w-fit capitalize font-bold px-3 text-gray-700 cursor-pointer text-base hover:text-blue-600 ">
            How To Use
          </li>
          <li>
            <Switcher />
          </li>
        </ul>
        <div className="w-full flex flex-col text-left dark:text-gray-500">
          <p className="text-lg mt-1 font-semibold">Follow me on :</p>
          <p className="flex w-fit flex-row my-1 ml-2 cursor-pointer hover:text-blue-700 text-sm font-semibold font-sans items-center">
            <FaGithub className="text-base mr-2" /> : Follow on Github
          </p>
          <p className="flex w-fit flex-row my-1 ml-2 cursor-pointer hover:text-blue-700 text-sm font-semibold font-sans items-center">
            <FaInstagram className="text-base mr-2" /> : Follow on Instagram
          </p>
          <p className="flex w-fit flex-row my-1 ml-2 cursor-pointer hover:text-blue-700 text-sm font-semibold font-sans items-center">
            <FaLinkedin className="text-base mr-2" /> : Follow on Linkdin
          </p>

          <div className="flex w-fit mt-2 border-2 border-blue-700 overflow-hidden">
            <input
              type="text"
              className="outline-none px-1 w-auto bg-white/5"
            />{" "}
            <button className="py-1 w-fit text-sm px-2 bg-blue-700 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col my-5">
        <p className="my-4 text-xl font-bold font-sans dark:text-gray-300">
          Our Components
        </p>
        <ul className="grid w-[70%] mx-auto grid-cols-6 place-items-center xsm:grid-cols-3 xsm:w-[90%] md:grid-cols-6 lg:w-[70%] gap-y-5">
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/landingpage"
            >
              Landing Page
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/navbar"
            >
              Navbars
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/loader"
            >
              Loaders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/profile"
            >
              UserInfo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/inputcard"
            >
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/stats"
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/bottom"
            >
              Footers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/trustedCompany"
            >
              TrustedCard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/button"
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/ErrorPage"
            >
              ErrorPage
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/ImageBox"
            >
              ImageBox
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " py-1 px-4 text-sm text-white capitalize bg-blue-700 h-fit"
                  : " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/ProductInfo"
            >
              Product Info
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col my-5">
        <p className="my-4 text-2xl font-bold font-sans dark:text-gray-300">
        React-Tailwind Tools
        </p>
        <ul className="grid w-[70%] mx-auto grid-cols-3 place-items-center xsm:grid-cols-2 xsm:w-[90%] md:grid-cols-3 lg:w-[70%] gap-y-5">
          <li>
            <NavLink
              className={
                " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/tools"
            >
              Tools
            </NavLink>
          </li>
          <li>
            <NavLink
               className={
                " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/tools"
            >
              Border-Radius Generator
            </NavLink>
          </li>
          <li>
            <NavLink
               className={
                " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/tools"
            >
              Colour-Gradient Generator
            </NavLink>
          </li>
          <li>
            <NavLink
               className={
                " capitalize text-sm px-4 font-bold hover:underline text-blue-700 py-1 h-fit"
              }
              to="/inputcard"
            >
              Box-Shadow Generator
            </NavLink>
          </li>
        </ul>
      </div>
      <p className="my-2 mt-8 text-sm font-normal dark:text-gray-500">
        @copyright since 2019 - {new Date().getFullYear()}
      </p>
      <p className="my-2 mt-2 text-base font-semibold text-gray-400">
        @Design by Prashant singh
      </p>
    </div>
  );
}

export default BottomMain;
