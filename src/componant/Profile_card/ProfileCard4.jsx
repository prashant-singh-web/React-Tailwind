import React, { useState } from "react";
import { IoIosCode } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProfileCard4() {
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
      <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative p-20">
        <div
          className={codeShow ? "absolute inset-0 overflow-scroll" : "hidden"}
        >
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`
      import React from "react";
      
      
      
      
      function Profile() {
        
        
        return (
            <figure class="md:flex bg-slate-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/logo.jpg" alt="" width="384" height="512"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-medium dark:text-gray-500/70">
                  “lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ratione similique, rem iure voluptates itaque. ”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
        );
      }
      
      export default Profile;
      
                 
              `}
          </SyntaxHighlighter>
        </div>
        <figure class="md:flex bg-slate-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/logo.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium dark:text-gray-500/70">
                “lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus ratione similique, rem iure voluptates itaque. ”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default ProfileCard4;
