import React, { useState } from "react";
import BoxShadowGenerator from "./BoxShadowGenerator";
import BorderRadiusGenerator from "./BorderRadiusGenerator";
import ColurGradient from "./ColurGradient";

function Homepage() {
  const [Compo, setCompo] = useState(<BoxShadowGenerator />);
  const [linkMatch, setLinkMatch] = useState("Boxshadow");
  const isBoxShadow = () => {
    setCompo(<BoxShadowGenerator />);
    setLinkMatch("Boxshadow");
  };
  const isBorderRadius = () => {
    setCompo(<BorderRadiusGenerator />);
    setLinkMatch("BorderRadius");
  };
  const isColurGradient = () => {
    setCompo(<ColurGradient />);
    setLinkMatch("ColourGradient");
  };
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-10
    "
    >
      <p className="text-3xl mt-10 font-bold">
        Welcome to{" "}
        <span className="text-4xl text-blue-600">React-Tailwind Tools</span>
      </p>
      <p className="text-sm font-medium text-gray-600">
        We have many tools like border , colur gradient , text-shadow ,
        box-shadow{" "}
      </p>
      <ul className="w-[70%] grid grid-cols-5 mt-10 border-b-2 text-sm xsm:text-xs md:text-sm text-white font-semibold border-blue-700">
        <li
          onClick={isBoxShadow}
          className={
            linkMatch === "Boxshadow"
              ? "w-full cursor-pointer text-center  py-1 bg-blue-700"
              : "w-full cursor-pointer text-center  py-1 text-blue-700"
          }
        >
          Box-Shadow
        </li>
        <li
          onClick={isBorderRadius}
          className={
            linkMatch === "BorderRadius"
              ? "w-full cursor-pointer text-center  py-1 bg-blue-700"
              : "w-full cursor-pointer text-center  py-1 text-blue-700"
          }
        >
          Border-Radius
        </li>
        <li
          onClick={isColurGradient}
          className={
            linkMatch === "ColourGradient"
              ? "w-full cursor-pointer text-center  py-1 bg-blue-700"
              : "w-full cursor-pointer text-center  py-1 text-blue-700"
          }
        >
          Colour-Gradient
        </li>
        <div></div>
      </ul>
      <div className="w-full min-h-[80vh]">{Compo}</div>
    </div>
  );
}

export default Homepage;
