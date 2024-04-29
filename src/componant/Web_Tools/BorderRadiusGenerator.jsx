import React, { useState } from 'react'

function BorderRadiusGenerator() {
    const [yValue, setYValue] = useState(0);
    const [xValue, setXValue] = useState(0);
    const [blurValue, setBlurValue] = useState(0);
    const [spreadValue, setSpreadValue] = useState(0);
    const [valueType, setValueType] = useState("px");
   
  
    
  return (
    <div className="w-full flex flex-col ">
      <p className="w-full text-center mt-4 text-2xl text-blue-600 font-semibold">
        Border-Radius Generator
      </p>
      <div className="w-full grid grid-cols-2 xsm:grid-cols-1 mt-10 md:grid-cols-2">
        <div className="w-full">
          <div className="w-full flex flex-col justify-center items-center h-full">
            <div
              className="w-64 h-64 my-20 xsm:w-32 xsm:h-32 md:w-64 md:h-64 mt-4 bg-blue-500"
              style={{
                borderRadius: ` ${yValue}${valueType} ${xValue}${valueType} ${blurValue}${valueType} ${spreadValue}${valueType} `,
              }}
            />
            
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 place-items-center p-5 ">
        <pre className="w-full mt-4 p-3 text-lg xsm:text-xs md:text-lg font-semibold bg-gray-100 rounded col-span-2">
              {`border-radius: ${yValue}${valueType} ${xValue}${valueType} ${blurValue}${valueType} ${spreadValue}${valueType} ;`}
            </pre>
            <div className="w-full col-span-2 grid grid-cols-3">
                <p className={`w-full text-sm py-2 ${valueType === "px" ? "text-white bg-blue-700":"text-gray-500"} font-semibold cursor-pointer`} onClick={()=>setValueType("px")}>px</p>
                <p className={`w-full text-sm py-2 ${valueType === "rem" ? "text-white bg-blue-700":"text-gray-500"} font-semibold cursor-pointer`} onClick={()=>setValueType("rem")}>rem</p>
                <p className={`w-full text-sm py-2 ${valueType === "%" ? "text-white bg-blue-700":"text-gray-500"} font-semibold cursor-pointer`}onClick={()=>setValueType("%")}>percentage</p>
            </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="yvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Left-Top value
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
              min={0}
              max={500}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="xvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Top-Right value
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
              min={0}
              max={500}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="blurvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Right-Bottom value
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
              min={0}
              max={500}
            />
          </div>
          <div className="w-full flex flex-col text-left bg-gray-100 py-10 px-3">
            <label
              htmlFor="spreadvalue"
              className="text-lg font-semibold text-gray-500"
            >
              Bottom-Left value
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
              min={0}
              max={500}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BorderRadiusGenerator