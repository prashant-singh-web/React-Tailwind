import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { HiOutlineLightBulb } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";

function Toggle3() {
  const [codeShow, setCodeShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Toggle with Icon
        </p>
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
          className={
            codeShow ? "absolute inset-0 overflow-scroll z-[1000]" : "hidden"
          }
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`

import React, { useState } from "react";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full min-h-[40vh] grid place-items-center">
      <div
        onClick={() => setToggle((toggle) => !toggle)}
        className={
          toggle
            ? "bg-blue-600 border-gray-500 px-10 rounded-2xl my-5 relative ease-linear duration-200 p-4 w-20 border"
            : "bg-white border-gray-500 px-10 rounded-2xl my-5 relative ease-linear duration-200 p-4 w-20 border"
        }
      >
        <div
          className={
            toggle
              ? "translate-x-12 absolute top-1 left-1 rounded-full duration-200 ease-linear p-1 overflow-hidden bg-white"
              : "translate-x-0 absolute top-1 left-1 rounded-full duration-200 ease-linear p-1 overflow-hidden bg-blue-600"
          }
        >
          {toggle ? (
            <HiLightBulb className="text-blue-700 text-sm" />
          ) : (
            <HiOutlineLightBulb className="text-white text-sm" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Toggle;
           
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full min-h-[40vh] grid place-items-center">
      <div
        onClick={() => setToggle((toggle) => !toggle)}
        className={
          toggle
            ? "bg-blue-600 border-gray-500 px-10 rounded-2xl my-5 relative ease-linear duration-200 p-4 w-20 border"
            : "bg-white border-gray-500 px-10 rounded-2xl my-5 relative ease-linear duration-200 p-4 w-20 border"
        }
      >
        <div
          className={
            toggle
              ? "translate-x-12 absolute top-1 left-1 rounded-full duration-200 ease-linear p-1 overflow-hidden bg-white"
              : "translate-x-0 absolute top-1 left-1 rounded-full duration-200 ease-linear p-1 overflow-hidden bg-blue-600"
          }
        >
          {toggle ? (
            <HiLightBulb className="text-blue-700 text-sm" />
          ) : (
            <HiOutlineLightBulb className="text-white text-sm" />
          )}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Toggle3;
