import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TiTick } from "react-icons/ti";

function Pricing2() {
    const [price, setPrice] = useState()
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full f font-sans my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
        Three tiers with emphasized tier
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
          import React, { useState } from "react";
          
          import { TiTick } from "react-icons/ti";
          
          function Pricing() {
            // for switching prices
              const [price, setPrice] = useState()
            
            return (
              <div className="w-full f font-sans my-5 flex flex-col ">
                
                <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
                 
                  <div className="w-full flex flex-col justify-between  items-center py-20 px-4  dark:text-white xsm:text-left sm:text-center ">
                    <p className="text-blue-700 text-sm font-semibold mb-5 w-full xsm:text-left sm:text-center">
                      Pricing
                    </p>
                    <p className="font-bold text-4xl w-full xsm:text-3xl  xsm:text-left sm:text-center md:text-4xl">
                      Choose the right plan for you
                    </p>
                    <p className="w-[50%] mt-4 text-base leading-6 text-gray-600 xsm:w-full sm:w-[70%] dark:text-gray-300 ">
                      Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
                      quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
                    </p>
                    <div className="flex mt-16 border rounded-2xl p-1 text-xs"><button className={!price ? "py-1.5 px-3 bg-blue-600  text-white font-semibold rounded-2xl":"py-1.5 px-3 text-blue-600 font-semibold"} onClick={()=>setPrice(false)}>Monthly</button><button onClick={()=>setPrice(true)} className={price ? "py-1.5 px-3 bg-blue-600  text-white font-semibold rounded-2xl":"py-1.5 px-3 text-blue-600 font-semibold"}  >Yearly</button></div>
                    <div className="w-full  mt-10 grid grid-cols-3 gap-5 place-items-start xsm:grid-cols-1 gap-y-10 sm:w-[50%] lg:w-full lg:grid-cols-3">
                      <div className="w-full flex flex-col p-8 pb-24 border border-gray-400 space-y-5 rounded-3xl text-left ">
                        <p className="text-lg font-semibold">Freelancer</p>
                        <p className="text-sm text-gray-700">The essentials to provide your best work for clients.</p>
                        <p className="text-4xl font-bold">
                        {!price ? "$15":"$144"}
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            /{!price ? "month":"yearly"}
                          </span>{" "}
                        </p>
                        
                        <button className="py-2  rounded-md text-sm font-semibold w-full bg-blue-600 hover:bg-blue-400 text-white ">
                          Buy Plan
                        </button>
                        <ul className="space-y-3">
                          
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            5 products
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            Up to 1,000 subscribers
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            Basic analytics
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            48-hour support response time
                          </li>
                        </ul>
                      </div>
                      <div className="w-full flex flex-col p-8 pb-16 border border-gray-400 space-y-5 rounded-3xl text-left ">
                        <p className="text-lg font-semibold">Startup</p>
                        <p className="text-sm text-gray-700">A plan that scales with your rapidly growing business.</p>
                        <p className="text-4xl font-bold">
                        {!price ? "$30":"$288"}
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                            /{!price ? "month":"yearly"}
                          </span>{" "}
                        </p>
                        
                        <button className="py-2  rounded-md text-sm font-semibold w-full bg-blue-600 hover:bg-blue-400 text-white ">
                          Buy Plan
                        </button>
                        <ul className="space-y-3">
                          
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            25 products
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            Up to 10,000 subscribers
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            Advanced analytics
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            24-hour support response time
                          </li>
                          <li className="flex items-center text-gray-600">
                            <TiTick className="mr-2  text-blue-600 " />
                            Marketing automations
                          </li>
                        </ul>
                      </div>
                      <div className="w-full flex flex-col p-[1.7rem] border bg-black dark:bg-white/5 text-white border-gray-400 space-y-5 rounded-3xl text-left ">
                        <p className="text-lg  font-semibold">Enterprise</p>
                        <p className="text-sm text-white">Dedicated support and infrastructure for your company.</p>
                        <p className="text-4xl font-bold">
                        Custom
                        </p>
                        
                        <button className="py-2  rounded-md text-sm font-semibold w-full bg-white/15 hover:bg-white/10 dark:bg-blue-600 dark:hover:bg-blue-500 text-white ">
                          Contact sell
                        </button>
                        <ul className="space-y-3 text-white">
                          
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            Unlimited products
                          </li>
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            Unlimited subscribers
                          </li>
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            Advanced analytics
                          </li>
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            1-hour, dedicated support response time
                          </li>
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            Marketing automations
                          </li>
                          <li className="flex items-center ">
                            <TiTick className="mr-2  text-blue-600 " />
                            Custom reporting tools
                          </li>
                        </ul>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          
          export default Pricing;
          
        `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full flex flex-col justify-between  items-center py-20 px-4  dark:text-white xsm:text-left sm:text-center ">
          <p className="text-blue-700 text-sm font-semibold mb-5 w-full xsm:text-left sm:text-center">
            Pricing
          </p>
          <p className="font-bold text-4xl w-full xsm:text-3xl  xsm:text-left sm:text-center md:text-4xl">
            Choose the right plan for you
          </p>
          <p className="w-[50%] mt-4 text-base leading-6 text-gray-600 xsm:w-full sm:w-[70%] dark:text-gray-300 ">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
          <div className="flex mt-16 border rounded-2xl p-1 text-xs"><button className={!price ? "py-1.5 px-3 bg-blue-600  text-white font-semibold rounded-2xl":"py-1.5 px-3 text-blue-600 font-semibold"} onClick={()=>setPrice(false)}>Monthly</button><button onClick={()=>setPrice(true)} className={price ? "py-1.5 px-3 bg-blue-600  text-white font-semibold rounded-2xl":"py-1.5 px-3 text-blue-600 font-semibold"}  >Yearly</button></div>
          <div className="w-full  mt-10 grid grid-cols-3 gap-5 place-items-start xsm:grid-cols-1 gap-y-10 sm:w-[50%] lg:w-full lg:grid-cols-3">
            <div className="w-full flex flex-col p-8 pb-24 border border-gray-400 space-y-5 rounded-3xl text-left ">
              <p className="text-lg font-semibold">Freelancer</p>
              <p className="text-sm text-gray-700">The essentials to provide your best work for clients.</p>
              <p className="text-4xl font-bold">
              ${!price ? "15":"144"}
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /{!price ? "month":"yearly"}
                </span>{" "}
              </p>
              
              <button className="py-2  rounded-md text-sm font-semibold w-full bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="space-y-3">
                
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  5 products
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  Up to 1,000 subscribers
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  48-hour support response time
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col p-8 pb-16 border border-gray-400 space-y-5 rounded-3xl text-left ">
              <p className="text-lg font-semibold">Startup</p>
              <p className="text-sm text-gray-700">A plan that scales with your rapidly growing business.</p>
              <p className="text-4xl font-bold">
              ${!price ? "30":"288"}
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /{!price ? "month":"yearly"}
                </span>{" "}
              </p>
              
              <button className="py-2  rounded-md text-sm font-semibold w-full bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="space-y-3">
                
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  25 products
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  Up to 10,000 subscribers
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  24-hour support response time
                </li>
                <li className="flex items-center text-gray-600">
                  <TiTick className="mr-2  text-blue-600 " />
                  Marketing automations
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col p-[1.7rem] border bg-black dark:bg-white/5 text-white border-gray-400 space-y-5 rounded-3xl text-left ">
              <p className="text-lg  font-semibold">Enterprise</p>
              <p className="text-sm text-white">Dedicated support and infrastructure for your company.</p>
              <p className="text-4xl font-bold">
              Custom
              </p>
              
              <button className="py-2  rounded-md text-sm font-semibold w-full bg-white/15 hover:bg-white/10 dark:bg-blue-600 dark:hover:bg-blue-500 text-white ">
                Contact sell
              </button>
              <ul className="space-y-3 text-white">
                
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  Unlimited products
                </li>
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  Unlimited subscribers
                </li>
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  Advanced analytics
                </li>
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  1-hour, dedicated support response time
                </li>
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  Marketing automations
                </li>
                <li className="flex items-center ">
                  <TiTick className="mr-2  text-blue-600 " />
                  Custom reporting tools
                </li>
              </ul>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing2;
