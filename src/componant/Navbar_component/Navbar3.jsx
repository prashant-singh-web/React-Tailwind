import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiTailwindcss } from "react-icons/si";

import { Prism } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Navbar3() {
  // usestate hook for toggli button
  const [dropdown, setDropdown] = useState()
  return (
    <div className="w-full min-h-[60vh]  bg-white my-3">
      <div className="w-full flex flex-row justify-between items-center py-2 px-2 relative  ">
        <SiTailwindcss className="text-3xl text-violet-800" />
        <ul className={dropdown ? "flex flex-row capitalize text-base font-medium xsm:absolute top-10 right-0 h-fit bg-white xsm:flex-col xsm:py-3  xsm:w-full xsm:text-sm md:flex md:flex-row md:static " : "flex flex-row capitalize text-base font-medium  h-fit bg-white  md:flex md:flex-row md:static "}>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
            home
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
            portfolio
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
            about
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
            contact
          </li>
          <li>
            <div className="flex flex-row  ml-4 group1-focus-within:ring-2 group1-focus-within:ring-green-200 xsm:w-full xsm:justify-center md:w-fit">
              <input
                type="text"
                name=""
                id=""
                className="py-1 px-2 outline-none border border-green-700 rounded-l-sm focus-within:ring-2 focus-within:ring-green-100 peer"
              />
              <button className="py-1 px-3  hover:bg-green-500 duration-200 ease-in-out bg-green-700 text-white ">
                search
              </button>
            </div>
          </li>
        </ul>
        <RxHamburgerMenu className="text-green-700 md:hidden" onClick={()=>setDropdown(dropdown => !dropdown)}/>
      </div>
      <div className="w-full h-full overflow-y-scroll">
      <Prism language="javascript" style={oneDark}>
        {
          `
          import React, { useState } from "react";
          import { RxHamburgerMenu } from "react-icons/rx";
          import { SiTailwindcss } from "react-icons/si";
          
          
          
          function Navbar3() {
            // usestate hook for toggli button
            const [dropdown, setDropdown] = useState()
            return (
              <div className="w-full min-h-[100vh] bg-white my-3">
                <div className="w-full flex flex-row justify-between items-center py-2 px-2 relative  ">
                  <SiTailwindcss className="text-3xl text-violet-800" />
                  <ul className={dropdown ? "flex flex-row capitalize text-base font-medium xsm:absolute top-10 right-0 h-fit bg-white xsm:flex-col xsm:py-3  xsm:w-full xsm:text-sm md:flex md:flex-row md:static " : "flex flex-row capitalize text-base font-medium  h-fit bg-white  md:flex md:flex-row md:static "}>
                    <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
                      home
                    </li>
                    <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
                      portfolio
                    </li>
                    <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
                      about
                    </li>
                    <li className="ml-2 py-1 px-3 cursor-pointer hover:text-green-800 rounded-xl duration-200 ease-linear">
                      contact
                    </li>
                    <li>
                      <div className="flex flex-row  ml-4 group1-focus-within:ring-2 group1-focus-within:ring-green-200 xsm:w-full xsm:justify-center md:w-fit">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="py-1 px-2 outline-none border border-green-700 rounded-l-sm focus-within:ring-2 focus-within:ring-green-100 peer"
                        />
                        <button className="py-1 px-3  hover:bg-green-500 duration-200 ease-in-out bg-green-700 text-white ">
                          search
                        </button>
                      </div>
                    </li>
                  </ul>
                  <RxHamburgerMenu className="text-green-700 md:hidden" onClick={()=>setDropdown(dropdown => !dropdown)}/>
                </div>
                
              </div>
            );
          }
          
          export default Navbar3;
          
          `
        }
      </Prism>
      </div>
    </div>
  );
}

export default Navbar3;
