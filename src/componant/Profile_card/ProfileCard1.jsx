import { GrInstagram } from "react-icons/gr";

import user from "../user.jpg";

import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function ProfileCard1() {
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Simple centered
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
          className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
import React from "react";
// import your img from dic
import user from "../user.jpg";
// from react icon
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Profile() {
  
  
  return (
    <div className="w-full my-5 flex flex-col ">
      
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
       
      <div className="w-full bg-white/70 dark:bg-[#111827] dark:text-white min-h-[60vh] grid place-items-center lg:h-[80vh]">
      <div className="w-[80%] rounded-md shadow-md h-fit py-10 flex flex-col justify-center items-center dark:bg-white/5  bg-white lg:w-[40%]">
        <img
          src={user}
          alt=""
          className="w-24 ring-2 ring-offset-2 bg-gray-500 ring-blue-600 h-24 rounded-full"
        />
        <p className="text-lg font-semibold capitalize mt-2">john doe</p>
        <p className="text-xs text-gray-300 uppercase">@web devoloper</p>
        <div className="flex flex-row my-6 w-full justify-evenly">
          <GrInstagram className="text-2xl cursor-pointer hover:text-blue-600  " />{" "}
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600 " />{" "}
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 " />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Profile;

           
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full bg-white/70 dark:bg-[#111827] dark:text-white min-h-[60vh] grid place-items-center lg:h-[80vh]">
          <div className="w-[80%] rounded-md shadow-md h-fit py-10 flex flex-col justify-center items-center dark:bg-white/5  bg-white lg:w-[40%]">
            <img
              src={user}
              alt=""
              className="w-24 ring-2 ring-offset-2 bg-gray-500 ring-blue-600 h-24 rounded-full"
            />
            <p className="text-lg font-semibold capitalize mt-2">john doe</p>
            <p className="text-xs text-gray-300 uppercase">@web devoloper</p>
            <div className="flex flex-row my-6 w-full justify-evenly">
              <GrInstagram className="text-2xl cursor-pointer hover:text-blue-600  " />{" "}
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600 " />{" "}
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard1;
