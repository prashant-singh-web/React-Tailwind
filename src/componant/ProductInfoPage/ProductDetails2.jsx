import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { IoIosCode } from "react-icons/io";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

function ProductDetails2() {
  const [codeShow, setCodeShow] = useState(false);
  return (
    <div className="w-full  my-5 flex flex-col ">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-medium font-sans dark:text-gray-200 ">
          Multiple Option Product Description
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
      <div className="w-full h-fit mt-5 rounded-md  bg-white dark:bg-[#111827] relative">
        <div
          className={
            codeShow ? "absolute inset-0 z-20  overflow-scroll" : "hidden"
          }
        >
          <SyntaxHighlighter
            language="javascript"
            className={"w-full h-full overflow-scroll"}
            style={oneDark}
          >
            {`
                 import React from 'react'
                 import { Link } from "react-router-dom";
                 import { FaStar } from "react-icons/fa6";import React from 'react'
                 import { Link } from "react-router-dom";
                 import { FaStar } from "react-icons/fa6";
                 import { CiStar } from "react-icons/ci";
                 
                 function TestProduct() {
                  return (
                    <div className="w-full h-fit grid place-items-center">
                    <div className="w-full md:w-[80%] lg:w-full sm:p-5 flex flex-col sm:border rounded-md my-5 pb-20">
                      <div className="flex flex-row text-sm font-medium text-gray-500 items-center">
                        <Link className="hover:text-gray-950" to={"/"}>
                          Home
                        </Link>{" "}
                        <span className=" mx-2 text-black/50 text-xl">/</span>
                        <Link className="hover:text-gray-950" to={"/"}>
                          Men
                        </Link>{" "}
                        <span className=" mx-2 text-black/50 text-xl">/</span>
                        <Link className="hover:text-gray-950" to={'/'}>
                          T-shirt
                        </Link>
                      </div>
                      <div className="w-full grid grid-cols-1 lg:grid-cols-3 my-5 gap-5">
                        <img
                          src="/tshirt.jpg"
                          alt="img"
                          className=" h-[30rem] w-full rounded-lg shadow hidden lg:block"
                        />
                        <div className="w-full grid-rows-2 gap-5 hidden lg:grid ">
                          <img
                            src="/shirt-2.jpg"
                            alt="img"
                            className="h-56 w-full rounded-lg shadow"
                          />
                          <img
                            src="/tshirt-1.jpg"
                            alt="img"
                            className="h-56 w-full rounded-lg shadow"
                          />
                        </div>
                        <img
                          src="/shirt-3.jpg"
                          alt="img"
                          className=" aspect-square  lg:h-[30rem] w-full md:rounded-lg md:shadow "
                        />
                      </div>
                      <div className="w-full p-1 sm:p-0 grid grid-cols-1 lg:grid-cols-[70%_30%] ">
                        <div className="flex flex-col w-full text-left pr-5 lg:border-r-2 ">
                          <h1 className="text-3xl font-bold ">Basic Tee 6-Pack</h1>
                          <p className="text-base py-6 text-black/80   whitespace-pre-line">
                            The Basic Tee 6-Pack allows you to fully express your vibrant
                            personality with three grayscale options. Feeling adventurous?
                            Put on a heather gray tee. Want to be a trendsetter? Try our
                            exclusive colorway: "Black". Need to add an extra pop of color
                            to your outfit? Our white tee has you covered.
                          </p>
                          <h3 className="text-sm font-medium">Highlights</h3>
                          <ul className="text-sm text-gray-500 list-disc list-inside my-4 space-y-2">
                            <li>Hand cut and sewn locally</li>
                            <li>Dyed with our proprietary colors</li>
                            <li>Pre-washed & pre-shrunk</li>
                            <li>Ultra-soft 100% cotton</li>
                          </ul>
                          <h3 className="text-sm font-medium mt-5">Details</h3>
                          <p className="text-sm text-gray-600 my-2">
                            The 6-Pack includes two black, two white, and two heather gray
                            Basic Tees. Sign up for our subscription service and be the
                            first to get new, exciting colors, like our upcoming "Charcoal
                            Gray" limited release.
                          </p>
                        </div>
                        <div className="w-full flex flex-col text-left lg:px-4 ">
                          <h1 className="text-3xl font-bold ">$192</h1>
                          <div className="flex h-fit flex-row my-3 items-center space-x-2">
                            <div className="flex flex-row items-center text-lg space-x-1">
                              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <CiStar />
                            </div>
                            <p className="text-sm text-gray-500 font-medium hover:text-gray-950 cursor-pointer">
                              117 reviews
                            </p>
                          </div>
                          <legend className="text-lg mt-3 text-gray-800 font-medium check">
                            Colur
                          </legend>
                          <div className="flex flex-row items-center space-x-3 my-3">
                            <input
                              type="radio"
                              name="colur"
                              id=""
                              className="appearance-none p-3 border border-gray-600 rounded-full bg-yellow-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-yellow-500"
                            />
                            <input
                              type="radio"
                              name="colur"
                              id=""
                              className="appearance-none p-3 border border-gray-600 rounded-full bg-blue-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-blue-500"
                            />
                            <input
                              type="radio"
                              name="colur"
                              id=""
                              className="appearance-none p-3 border border-gray-600 rounded-full bg-red-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-red-500"
                            />
                          </div>
                          <div className="flex flex-row justify-between mt-4">
                            <h4 className="text-sm text-gray-800 font-medium check">
                              Size
                            </h4>
                            <h4 className="text-sm text-blue-600 font-medium ">
                              Size guide
                            </h4>
                          </div>
                          <div className="w-full grid grid-cols-4 gap-2 py-2">
                            <button
                              className="border-2 text-sm font-semibold py-3 rounded-md text-gray-500 hover:cursor-not-allowed"
                              disabled
                            >
                              XXS
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              XS
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              S
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              M
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              L
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              XL
                            </button>
                            <button className="border-2 bg-violet-50 border-violet-500 text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              2XL
                            </button>
                            <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                              3XL
                            </button>
                          </div>
                          <button className="bg-black shadow hover:bg-white hover:text-black hover:scale-95 ease-in-out duration-200 border border-black text-sm font-semibold py-2 rounded-md my-3 text-white">
                            Add To Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }

                export default TestProduct


    `}
          </SyntaxHighlighter>
        </div>
        <div className="w-full h-fit grid place-items-center">
          <div className="w-full md:w-[80%] lg:w-full sm:p-5 flex flex-col sm:border rounded-md my-5 pb-20">
            <div className="flex flex-row text-sm font-medium text-gray-500 items-center">
              <Link className="hover:text-gray-950" to={"/"}>
                Home
              </Link>{" "}
              <span className=" mx-2 text-black/50 text-xl">/</span>
              <Link className="hover:text-gray-950" to={"/"}>
                Men
              </Link>{" "}
              <span className=" mx-2 text-black/50 text-xl">/</span>
              <Link className="hover:text-gray-950" to={'/'}>
                T-shirt
              </Link>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 my-5 gap-5">
              <img
                src="/tshirt.jpg"
                alt="img"
                className=" h-[30rem] w-full rounded-lg shadow hidden lg:block"
              />
              <div className="w-full grid-rows-2 gap-5 hidden lg:grid ">
                <img
                  src="/shirt-2.jpg"
                  alt="img"
                  className="h-56 w-full rounded-lg shadow"
                />
                <img
                  src="/tshirt-1.jpg"
                  alt="img"
                  className="h-56 w-full rounded-lg shadow"
                />
              </div>
              <img
                src="/shirt-3.jpg"
                alt="img"
                className=" aspect-square  lg:h-[30rem] w-full md:rounded-lg md:shadow "
              />
            </div>
            <div className="w-full p-1 sm:p-0 grid grid-cols-1 lg:grid-cols-[70%_30%] ">
              <div className="flex flex-col w-full text-left pr-5 lg:border-r-2 ">
                <h1 className="text-3xl font-bold ">Basic Tee 6-Pack</h1>
                <p className="text-base py-6 text-black/80   whitespace-pre-line">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: "Black". Need to add an extra pop of color
                  to your outfit? Our white tee has you covered.
                </p>
                <h3 className="text-sm font-medium">Highlights</h3>
                <ul className="text-sm text-gray-500 list-disc list-inside my-4 space-y-2">
                  <li>Hand cut and sewn locally</li>
                  <li>Dyed with our proprietary colors</li>
                  <li>Pre-washed & pre-shrunk</li>
                  <li>Ultra-soft 100% cotton</li>
                </ul>
                <h3 className="text-sm font-medium mt-5">Details</h3>
                <p className="text-sm text-gray-600 my-2">
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming "Charcoal
                  Gray" limited release.
                </p>
              </div>
              <div className="w-full flex flex-col text-left lg:px-4 ">
                <h1 className="text-3xl font-bold ">$192</h1>
                <div className="flex h-fit flex-row my-3 items-center space-x-2">
                  <div className="flex flex-row items-center text-lg space-x-1">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <CiStar />
                  </div>
                  <p className="text-sm text-gray-500 font-medium hover:text-gray-950 cursor-pointer">
                    117 reviews
                  </p>
                </div>
                <legend className="text-lg mt-3 text-gray-800 font-medium check">
                  Colur
                </legend>
                <div className="flex flex-row items-center space-x-3 my-3">
                  <input
                    type="radio"
                    name="colur"
                    id=""
                    className="appearance-none p-3 border border-gray-600 rounded-full bg-yellow-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-yellow-500"
                  />
                  <input
                    type="radio"
                    name="colur"
                    id=""
                    className="appearance-none p-3 border border-gray-600 rounded-full bg-blue-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-blue-500"
                  />
                  <input
                    type="radio"
                    name="colur"
                    id=""
                    className="appearance-none p-3 border border-gray-600 rounded-full bg-red-500 ch checked:ring-2 checked:ring-offset-2 checked:ring-red-500"
                  />
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <h4 className="text-sm text-gray-800 font-medium check">
                    Size
                  </h4>
                  <h4 className="text-sm text-blue-600 font-medium ">
                    Size guide
                  </h4>
                </div>
                <div className="w-full grid grid-cols-4 gap-2 py-2">
                  <button
                    className="border-2 text-sm font-semibold py-3 rounded-md text-gray-500 hover:cursor-not-allowed"
                    disabled
                  >
                    XXS
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    XS
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    S
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    M
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    L
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    XL
                  </button>
                  <button className="border-2 bg-violet-50 border-violet-500 text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    2XL
                  </button>
                  <button className="border text-sm font-semibold py-3 rounded-md text-gray-500 hover:bg-gray-100">
                    3XL
                  </button>
                </div>
                <button className="bg-black shadow hover:bg-white hover:text-black hover:scale-95 ease-in-out duration-200 border border-black text-sm font-semibold py-2 rounded-md my-3 text-white">
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails2;
