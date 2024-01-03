import React, { useState } from 'react'
import user from '../user.jpg'



import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LuEye } from 'react-icons/lu';
import { IoIosCode } from 'react-icons/io';


function ProfileCard2() {
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



function Profile() {
  
  
  return (
    <div className="w-full my-5 flex flex-col ">
      
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
       
      <div className="w-[90%] shadow-xl rounded-md  py-8 grid bg-white dark:bg-white/5 text-black dark:text-white border grid-cols-[30%_70%] xsm:grid-rows-[40%_60%] xsm:grid-cols-1 md:w-[50%] md:grid-rows-[40%_60%] lg:w-[30%]">
          <div className="w-full grid place-items-center ">
            <img
              src={user}
              alt="hero"
              className="w-20 ring-2 ring-offset-2 ring-blue-600 h-20  rounded-full"
            />
          </div>
          <div className="w-full items-start xsm:px-2 flex flex-col text-center">
            <p className="text-2xl font-bold capitalize w-full text-center ">Jhon Doe</p>
            <p className="text-xs text-gray-500 uppercase w-full text-center ">@web devoloper</p>
            <p className="text-sm w-full text-left  pr-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit nobis totam laudantium, molestiae animi magnam vero repellendus aliquam quia!</p>
            <div className="w-full flex flex-row justify-center mt-3 ">
                <button className="py-1 mr-4 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Follow</button>
                <button className="py-1 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Massage</button>
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
        <div className="w-full min-h-[60vh] grid place-items-center p-2 dark:bg-[#111827] bg-white/70 lg:h-[80vh] ">
        <div className="w-[90%] shadow-xl rounded-md  py-8 grid bg-white dark:bg-white/5 text-black dark:text-white border grid-cols-[30%_70%] xsm:grid-rows-[40%_60%] xsm:grid-cols-1 md:w-[50%] md:grid-rows-[40%_60%] lg:w-[30%]">
          <div className="w-full grid place-items-center ">
            <img
              src={user}
              alt="hero"
              className="w-20 ring-2 ring-offset-2 ring-blue-600 h-20  rounded-full"
            />
          </div>
          <div className="w-full items-start xsm:px-2 flex flex-col text-center">
            <p className="text-2xl font-bold capitalize w-full text-center ">Jhon Doe</p>
            <p className="text-xs text-gray-500 uppercase w-full text-center ">@web devoloper</p>
            <p className="text-sm w-full text-left  pr-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit nobis totam laudantium, molestiae animi magnam vero repellendus aliquam quia!</p>
            <div className="w-full flex flex-row justify-center mt-3 ">
                <button className="py-1 mr-4 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Follow</button>
                <button className="py-1 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Massage</button>
            </div>
          </div>
        </div>
    </div>
      </div>
    </div>
  );
}

export default ProfileCard2;


