import React from 'react'
import { TiTick } from 'react-icons/ti';

function Pricingtest() {
    
     
    
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

export default Pricingtest