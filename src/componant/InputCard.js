import React from "react";


import InputCard1 from "./Input_components/InputCard1";
import InputCard2 from "./Input_components/InputCard2";
import InputCard3 from "./Input_components/InputCard3";

function InputCard() {
  return (
    <div className="w-full flex flex-col dark:bg-[#111827]  overflow-y-scroll p-2 pb-10 ">
      <p className='w-full text-center py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2'>input-card component</p>
      {/* 1st card */}
    <InputCard1/>
      {/* 2nd card */}
      <InputCard2/>
      {/* 3rd card */}
      <InputCard3/>
    </div>
  );
}

export default InputCard;
