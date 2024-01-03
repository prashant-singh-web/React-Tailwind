import React from "react";
import user from "../user.jpg";

function ProfileCard3() {
  return (
    <div className="w-full min-h-[60vh] border border-gray-300 bg-white/70 grid place-items-center lg:min-h-[80vh]">
      
        <div className="w-[60%] h-[200px] items-center flex flex-row xsm:w-[90%] xsm:flex-col xsm:h-fit xsm:p-3  bg-white rounded-md shadow-xl md:w-[70%] lg:w-[40%]">
          <img
            src={user}
            alt="hero"
            className="w-[200px] h-[250px] rounded-md xsm:w-full xsm:h-[180px] md:h-[200px] "
          />
          <div className="flex flex-col justify-start items-start px-3">
            <p className="text-2xl font-bold capitalize xsm:text-xl md:text-2xl">
              Jhon Doe
            </p>
            <p className="text-xs text-gray-500 uppercase">@web devoloper</p>
            <p className="text-sm w-full text-left ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit fugit nobis totam laudantium, molestiae animi magnam
              vero repellendus aliquam quia!
            </p>
            <div className="w-full flex flex-row mt-3 ">
              <button className="py-1 mr-4 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">
                Follow
              </button>
              <button className="py-1 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">
                Massage
              </button>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default ProfileCard3;
