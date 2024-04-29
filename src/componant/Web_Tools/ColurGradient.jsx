import React, { useState } from "react";

function ColurGradient() {
  const [yValue, setYValue] = useState(0);
  const [xValue, setXValue] = useState("#0000ff");
  const [blurValue, setBlurValue] = useState("#ff0000");

  return (
    <div className="w-full flex flex-col ">
      <p className="w-full text-center mt-4 text-2xl text-blue-600 font-semibold">
        Colour-Gradient Generator
      </p>
      <div className="w-full grid grid-cols-2 xsm:grid-cols-1 mt-10 md:grid-cols-2">
        <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center h-full">
            <div
              className="min-w-[70%] min-h-[70%] h-56 my-20  mt-4 bg-blue-500"
              style={{
                background: `linear-gradient(${yValue}deg, ${xValue}, ${blurValue})`,
              }}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 place-items-center p-5 ">
          <pre className="w-full mt-4 p-3 text-lg xsm:text-[8px] md:text-xs font-semibold bg-gray-100 rounded col-span-2">
            {`background: linear-gradient(${yValue}deg, ${xValue}, ${blurValue});`}
          </pre>

          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="yvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Degree value
            </label>
            <input
              id="yvalue"
              type="text"
              placeholder="Enter degree"
              value={yValue}
              onChange={(e) => setYValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="range"
              name=""
              onChange={(e) => setYValue(e.target.value)}
              id="yvalue"
              value={yValue === 0 ? "0" : yValue}
              min={0}
              max={360}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="xvalue"
              className="text-lg font-semibold text-gray-500"
            >
              1st color
            </label>
            <input
              id="xvalue"
              type="text"
              placeholder="Enter color value"
              value={xValue}
              onChange={(e) => setXValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="color"
              name=""
              onChange={(e) => setXValue(e.target.value)}
              id="xvalue"
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="blurvalue"
              className="text-lg font-semibold text-gray-500"
            >
              2nd color
            </label>
            <input
              id="bluevalue"
              type="text"
              placeholder="Enter color value"
              value={blurValue}
              onChange={(e) => setBlurValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="color"
              name=""
              onChange={(e) => setBlurValue(e.target.value)}
              id="xvalue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColurGradient;
