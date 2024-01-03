import React, { useState } from "react";
// import from react-icon
import { RxHamburgerMenu } from "react-icons/rx";
import { SiTailwindcss } from "react-icons/si";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Navbar2() {
  // usestate for toggle button
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-[60vh]  bg-white ">
      <div className="w-full flex flex-row justify-around relative items-center py-2  ">
        <SiTailwindcss className="text-3xl text-violet-800" />
        <ul
          className={
            dropdown
              ? "flex flex-row capitalize text-base font-medium   xsm:absolute xsm:top-10 xsm:left-0 xsm:w-full xsm:h-fit xsm:flex-col xsm:p-10 xsm:bg-white xsm:z-50 md:static md:flex-row md:p-0 md:w-fit"
              : "flex flex-row capitalize text-base  font-medium  xsm:hidden  xsm:absolute xsm:top-10 xsm:left-0 xsm:w-full xsm:h-fit xsm:flex-col xsm:p-10 xsm:bg-white xsm:z-50 md:static md:flex md:flex-row md:p-0 md:w-fit"
          }
        >
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            home
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            portfolio
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            about
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            contact
          </li>
        </ul>
        <button className="py-1 px-3 rounded-lg hover:bg-violet-500 duration-200 ease-in-out bg-violet-700 text-white xsm:text-sm">
          log in
        </button>
        <RxHamburgerMenu
          className="hidden xsm:block md:hidden cursor-pointer"
          onClick={() => setDropdown((dropdown) => !dropdown)}
        />
      </div>
      <button
        onClick={() => setShow((show) => !show)}
        className="py-2 px-5 bg-green-500"
      >
        show code{" "}
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        className={show ? "block" : "hidden"}
      >
        {`
import React, { useState } from 'react'
// import from react-icon
import { RxHamburgerMenu } from 'react-icons/rx'
import { SiTailwindcss } from 'react-icons/si'



function Navbar() {
  // usestate for toggle button
  const [dropdown, setDropdown] = useState(false)
 
  
  return (
    <div className="w-full flex flex-col min-h-[60vh]  bg-white ">
    <div className="w-full flex flex-row justify-around relative items-center py-2  ">
        <SiTailwindcss className="text-3xl text-violet-800" />
        <ul
          className={
            dropdown
              ? "flex flex-row capitalize text-base font-medium   xsm:absolute xsm:top-10 xsm:left-0 xsm:w-full xsm:h-fit xsm:flex-col xsm:p-10 xsm:bg-white xsm:z-50 md:static md:flex-row md:p-0 md:w-fit"
              : "flex flex-row capitalize text-base  font-medium  xsm:hidden  xsm:absolute xsm:top-10 xsm:left-0 xsm:w-full xsm:h-fit xsm:flex-col xsm:p-10 xsm:bg-white xsm:z-50 md:static md:flex md:flex-row md:p-0 md:w-fit"
          }
        >
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            home
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            portfolio
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            about
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-violet-700  duration-200 ease-linear xsm:text-sm ">
            contact
          </li>
        </ul>
        <button className="py-1 px-3 rounded-lg hover:bg-violet-500 duration-200 ease-in-out bg-violet-700 text-white xsm:text-sm">
          log in
        </button>
        <RxHamburgerMenu
          className="hidden xsm:block md:hidden cursor-pointer"
          onClick={() => setDropdown((dropdown) => !dropdown)}
        />
      </div>
    
  </div>
  )
}

export default Navbar
        `}
      </SyntaxHighlighter>
    </div>
  );
}

export default Navbar2;
