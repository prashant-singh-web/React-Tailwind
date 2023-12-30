import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-[250px] h-[100vh] bg-white relative border-r-2 border-blue-700">
      <p className=" p-4 text-lg uppercase font-bold text-left text-blue-700">
        react-tailwind
      </p>

      <div className="w-full flex flex-col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/loader"
        >
          loader
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/profile"
        >
          profile card
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/inputcard"
        >
          input card
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/navbar"
        >
          Navbars
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full py-1 text-sm text-white capitalize bg-blue-600"
              : "w-full capitalize text-sm text-blue-600 py-1"
          }
          to="/bottom"
        >
          Bottom
        </NavLink>
      </div>
      <div className=" w-full text-center text-base my-10">
        For code
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/prashant-singh-web/React-Tailwind.git"
          className="text-lg text-violet-700 ml-1 font-semibold"
        >
          click here
        </a>
      </div>
    </div>
  );
}

export default Navbar;
