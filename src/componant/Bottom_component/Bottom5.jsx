import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

function Bottom5() {
    return (
        <div className="w-full my-5 flex flex-col ">
         
          <div className="w-full mt-5 rounded-md  bg-white dark:bg-[#111827] border border-gray-400 relative">
            
            <div className="w-full flex flex-col p-6 ">
            <SiTailwindcss className="text-violet-700 text-2xl mt-20 xsm:mt-8" />
            <div className="full grid grid-cols-4 place-items-start py-10 xsm:py-5 xsm:grid-cols-2 xsm:grid-rows-2 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:py-10">
                <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                    <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                    </li>
                </ul>
                <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                    <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                    </li>
                </ul>
                <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                    <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                    </li>
                </ul>
                <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
                    <li className="font-semibold dark:text-white  mb-8 xsm:mb-4 md:mb-8">Solutions</li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Analytics</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Commerce</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-gray-500 dark:hover:text-white hover:text-gray-900">Insights</Link>
                    </li>
                </ul>
                
                
               
            </div>
            <p className=" text-sm font-normal text-gray-400 dark:text-gray-700 xsm:mb-3 pt-2 border-t border-gray-200">
           © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
            </div>
          </div>
        </div>
      );
}
  

export default Bottom5