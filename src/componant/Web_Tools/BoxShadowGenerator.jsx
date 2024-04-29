import React, { useState } from "react";

const BoxShadowGenerator = () => {
  const [yValue, setYValue] = useState(0);
  const [xValue, setXValue] = useState(0);
  const [blurValue, setBlurValue] = useState(0);
  const [spreadValue, setSpreadValue] = useState(0);
  const [color, setColor] = useState("#000000");
  const [toggle, setToggle] = useState(false);
  const [valueType, setValueType] = useState("px");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-full flex flex-col ">
      <p className="w-full text-center mt-4 text-2xl text-blue-600 font-semibold">
        Box-Shadow Generator
      </p>
      <div className="w-full grid grid-cols-2 xsm:grid-cols-1 mt-10 md:grid-cols-2">
        <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center h-full">
            <div
              className="w-64 h-64 my-20 xsm:w-32 xsm:h-32 md:w-64 md:h-64 mt-4 bg-blue-500"
              style={{
                boxShadow: `${toggle ? "inset" : ""} ${yValue}px ${xValue}px ${blurValue}px ${spreadValue}px ${color}`,
              }}
            />
            
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 place-items-center p-5 ">
        <pre className="w-full mt-4 p-3 text-lg xsm:text-xs md:text-lg font-semibold bg-gray-100 rounded col-span-2">
              {`box-shadow: ${toggle ? "inset" : ""} ${yValue}px ${xValue}px ${blurValue}px ${spreadValue}px ${color};`}
            </pre>
             <div className="w-full col-span-2 grid grid-cols-2">
                <p className={`w-full text-sm py-2 ${valueType === "px" ? "text-white bg-blue-700":"text-gray-500"} font-semibold cursor-pointer`} onClick={()=>setValueType("px")}>px</p>
                <p className={`w-full text-sm py-2 ${valueType === "rem" ? "text-white bg-blue-700":"text-gray-500"} font-semibold cursor-pointer`} onClick={()=>setValueType("rem")}>rem</p>
                
            </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="yvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Y value
            </label>
            <input
              id="yvalue"
              type="text"
              placeholder="Enter box shadow"
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
              min={-100}
              max={100}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="xvalue"
              className="text-lg font-semibold text-gray-500"
            >
              x value
            </label>
            <input
              id="xvalue"
              type="text"
              placeholder="Enter box shadow"
              value={xValue}
              onChange={(e) => setXValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="range"
              name=""
              onChange={(e) => setXValue(e.target.value)}
              id="xvalue"
              value={xValue === 0 ? "0" : xValue}
              min={-100}
              max={100}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="blurvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Blur value
            </label>
            <input
              id="bluevalue"
              type="text"
              placeholder="Enter box shadow"
              value={blurValue}
              onChange={(e) => setBlurValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="range"
              name=""
              onChange={(e) => setBlurValue(e.target.value)}
              id="xvalue"
              value={blurValue === 0 ? "0" : blurValue}
              min={-100}
              max={100}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="spreadvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Spread value
            </label>
            <input
              id="spreadvalue"
              type="text"
              placeholder="Enter box shadow"
              value={spreadValue}
              onChange={(e) => setSpreadValue(e.target.value)}
              className="p-1 pl-3 border border-gray-300 rounded outline-none focus-within:border-blue-700 focus-within:border-2 my-2"
            />
            <input
              type="range"
              name=""
              onChange={(e) => setSpreadValue(e.target.value)}
              id="spreadvalue"
              value={spreadValue === 0 ? "0" : spreadValue}
              min={-100}
              max={100}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <p className="text-lg font-semibold text-gray-500">Inset</p> <button onClick={()=>setToggle(toggle => !toggle)} className={`p-4 w-fit px-10 rounded-2xl my-5 bg-white ${toggle ? "toggle1shadow": "toggle1shadow1"} relative before:absolute duration-200 ease-linear ${!toggle ? "before:left-1":"before:right-1"} before:top-1 before:p-3 before:rounded-full before:bg-blue-700 before:w-fit`}></button>
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 h-full px-3">
            <p className="text-lg font-semibold text-gray-500">Colur value</p>
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
