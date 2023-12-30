import React, { useState } from "react";
import { SiTailwindcss } from "react-icons/si";
import { IoIosArrowDown,Io, IoIosArrowUp } from "react-icons/io";

function Navbar4() {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div className="w-full h-96 bg-white">
      <div className="w-full flex flex-row justify-around items-center py-2  ">
        <SiTailwindcss className="text-3xl text-violet-800" />
        <ul className="flex flex-row capitalize text-base font-medium">
          <li className="ml-2 py-1 px-3 cursor-pointer hover:bg-violet-700 hover:text-white rounded-sm duration-200 ease-linear">
            home
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:bg-violet-700 hover:text-white rounded-sm duration-200 ease-linear">
            portfolio
          </li>
          <li className={dropdown ? "ml-2 py-1 px-3 flex justify-center items-center flex-row cursor-pointer bg-violet-700 relative text-white rounded-sm duration-200 ease-linear":"ml-2 py-1 px-3 flex justify-center items-center flex-row cursor-pointer hover:bg-violet-700 relative hover:text-white rounded-sm duration-200 ease-linear"} onClick={()=>setDropdown(dropdown => !dropdown)}>
            option {!dropdown ? <IoIosArrowDown className="text-sm text-center ml-2"/> : <IoIosArrowUp className="text-sm text-center ml-2"/>}
            <ul className={dropdown ? "w-[150px]   absolute top-9 left-0" : "h-0 hidden"}>
                <li className={dropdown ? "dropdown  w-full py-1  hover:bg-violet-400 text-sm capitalize font-medium bg-violet-700 ":" w-full py-1 text-white text-sm capitalize font-medium hover:bg-violet-700 hover:text-white"}>option 1</li>
                <li className={dropdown ? "dropdown dropdeley  w-full py-1 hover:bg-violet-400 text-sm capitalize font-medium bg-violet-700 text-white":" "}>option 2</li>
                <li className={dropdown ? "dropdown dropdeley1  w-full py-1 hover:bg-violet-400 text-sm capitalize font-medium bg-violet-700 text-white":" "}>option 3</li>
                <li className={dropdown ? "dropdown dropdeley2 w-full py-1 hover:bg-violet-400 text-sm capitalize font-medium bg-violet-700 text-white":" "}>option 4</li>
            </ul>
          </li>
          <li className="ml-2 py-1 px-3 cursor-pointer hover:bg-violet-700 hover:text-white rounded-sm duration-200 ease-linear">
            contact
          </li>
        </ul>
        <button className="py-1 px-3 rounded-lg hover:bg-violet-500 duration-200 ease-in-out bg-violet-700 text-white">
          log in
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-3xl font-semibold text-violet-700">Welcome to React-Tailwind</p>
        <p>thanku for coming</p>
      </div>
    </div>
  );
}

export default Navbar4;
