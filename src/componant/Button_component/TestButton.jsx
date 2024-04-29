import React, { useState } from "react";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

function TestButton() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full min-h-[40vh] grid place-items-center">
     
          <div
            onClick={() => setToggle((toggle) => !toggle)}
            className="p-3 w-14 h-fit border
            border-gray-500 px-10 rounded-2xl my-5 bg-white s relative ease-linear duration-200"
          >
            <div
              className={
                toggle
                  ? "translate-x-14 absolute top-0 left-0 scale-150 rounded-full duration-200 ease-linear bg-blue-700 p-1 overflow-hidden rotate-[360deg]"
                  : "translate-x-0 absolute top-0 left-0 scale-150 rounded-full duration-200 ease-linear bg-blue-700 p-1 overflow-hidden rotate-[0deg]"
              }
            >
              {toggle ? (
                <HiLightBulb className="text-white text-sm" />
              ) : (
                <HiOutlineLightBulb className="text-white text-sm" />
              )}
            </div>
          </div>
        </div>
  );
}

export default TestButton;
