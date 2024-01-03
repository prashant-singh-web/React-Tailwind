import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TiTick } from "react-icons/ti";

function Pricing1() {
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full f font-serif my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Three tiers with dividers
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
import { TiTick } from "react-icons/ti";

function Pricing() {
  
  return (
    <div className="w-full f font-serif my-5 flex flex-col ">
      
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
          <div className="w-full  mt-10 grid grid-cols-3 place-items-start xsm:grid-cols-1 gap-y-10 sm:w-[50%] lg:w-full lg:grid-cols-3">
            <div className="w-full pl-4 flex flex-col text-left space-y-8 xsm:border-b py-5 xsm:border-gray-300 lg:border-0 lg:py-0 ">
              <p className="text-sm font-bold">Basic</p>
              <p className="text-5xl font-bold">
                $15
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $12 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold">
                  Everything necessary to get started.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  5 products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Up to 1,000 subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  48-hour support response time
                </li>
              </ul>
            </div>
            <div className="w-full pl-4 flex flex-col text-left space-y-8  xsm:border-b py-5 xsm:border-gray-300 lg:border-x lg:border-b-0 lg:py-0">
              <p className="text-sm font-bold">Essential</p>
              <p className="text-5xl font-bold">
                $30
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $24 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold pr-4">
                  Everything in Basic, plus essential tools for growing your
                  business.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  25 products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Up to 10,000 subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  24-hour support response time
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Marketing automations
                </li>
              </ul>
            </div>
            <div className="w-full pl-4 flex flex-col text-left space-y-8   ">
              <p className="text-sm font-bold">Growth</p>
              <p className="text-5xl font-bold">
                $60
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $48 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold pr-4">
                  Everything in Essential, plus collaboration tools and deeper
                  insights.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Unlimited products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Unlimited subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  1-hour, dedicated support response time
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Marketing automations
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
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
          <div className="w-full  mt-10 grid grid-cols-3 place-items-start xsm:grid-cols-1 gap-y-10 sm:w-[50%] lg:w-full lg:grid-cols-3">
            <div className="w-full pl-4 flex flex-col text-left space-y-8 xsm:border-b py-5 xsm:border-gray-300 lg:border-0 lg:py-0 ">
              <p className="text-sm font-bold">Basic</p>
              <p className="text-5xl font-bold">
                $15
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $12 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold">
                  Everything necessary to get started.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  5 products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Up to 1,000 subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  48-hour support response time
                </li>
              </ul>
            </div>
            <div className="w-full pl-4 flex flex-col text-left space-y-8  xsm:border-b py-5 xsm:border-gray-300 lg:border-x lg:border-b-0 lg:py-0">
              <p className="text-sm font-bold">Essential</p>
              <p className="text-5xl font-bold">
                $30
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $24 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold pr-4">
                  Everything in Basic, plus essential tools for growing your
                  business.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  25 products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Up to 10,000 subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  24-hour support response time
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Marketing automations
                </li>
              </ul>
            </div>
            <div className="w-full pl-4 flex flex-col text-left space-y-8   ">
              <p className="text-sm font-bold">Growth</p>
              <p className="text-5xl font-bold">
                $60
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  /month
                </span>{" "}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                $48 per month if paid annually
              </p>
              <button className="py-2 rounded-md text-sm font-semibold w-[90%] bg-blue-600 hover:bg-blue-400 text-white ">
                Buy Plan
              </button>
              <ul className="t space-y-3">
                <li className="text-base font-bold pr-4">
                  Everything in Essential, plus collaboration tools and deeper
                  insights.
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Unlimited products
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Unlimited subscribers
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  1-hour, dedicated support response time
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
                  Marketing automations
                </li>
                <li className="flex items-center">
                  <TiTick className="mr-2 rounded-full bg-blue-600 text-white" />
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

export default Pricing1;
