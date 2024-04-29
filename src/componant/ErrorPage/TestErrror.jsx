import React from "react";
import { NavLink } from "react-router-dom";

function TestErrror() {
  return (
    <div className="w-full min-h-[100vh] z-10 grid relative place-items-center text-black dark:text-white">
      <div className=" absolute inset-0 grid place-items-center">
        <p className="text-[400px] xsm:text-[11rem]  lg:text-[400px] xsm:mb-56 lg:mb-0 text-gray-200 dark:text-gray-800  font-mono  font-black">
          404
        </p>
      </div>
      <div className="flex flex-col z-40">
        <p className="text-lg font-semibold">
          Connection lost ? please go back
        </p>
        <NavLink
          className="py-2 px-4 text-sm font-semibold bg-blue-500 text-white mt-5"
          to="/"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default TestErrror;
