import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import user from './user.jpg'

function Profile() {
  return (
    <div className="w-full flex flex-col  items-center overflow-y-scroll">
      <p className='w-full text-center py-8 capitalize text-2xl font-bold text-violet-700 bg-white my-2'>profile component</p>
      <div className="w-full grid grid-cols-2 place-items-center">
        {/* 1st card */}
        <div className="w-[70%] rounded-md h-fit py-10 flex flex-col justify-center items-center bg-white">
          <img
            src={user}
            alt=""
            className="w-24 ring-2 ring-offset-2 bg-gray-500 ring-blue-600 h-24 rounded-full"
          />
          <p className="text-lg font-semibold capitalize mt-2">john doe</p>
          <p className="text-xs text-gray-300 uppercase">@web devoloper</p>
          <div className="flex flex-row my-6 w-full justify-evenly">
            <GrInstagram className="text-2xl cursor-pointer hover:text-blue-600  " />{" "}
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600 " />{" "}
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 " />
          </div>
        </div>
        {/* 2nd card */}
        <div className="w-[80%]  py-5 grid bg-white grid-cols-[30%_70%]">
          <div className="w-full grid place-items-center">
            <img
              src={user}
              alt="hero"
              className="w-20 ring-2 ring-offset-2 ring-blue-600 h-20 rounded-full"
            />
          </div>
          <div className="w-full items-start flex flex-col">
            <p className="text-2xl font-bold capitalize">Jhon Doe</p>
            <p className="text-xs text-gray-500 uppercase">@web devoloper</p>
            <p className="text-sm w-full text-left ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit nobis totam laudantium, molestiae animi magnam vero repellendus aliquam quia!</p>
            <div className="w-full flex flex-row mt-3 ">
                <button className="py-1 mr-4 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Follow</button>
                <button className="py-1 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Massage</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  h-fit flex flex-col items-center justify-center my-5 py-10">
        <div className="w-[60%] h-[200px] items-center flex flex-row bg-white rounded-md">
        <img
              src={user}
              alt="hero"
              className="w-[200px] h-[250px] rounded-md "
            />
            <div className="flex flex-col justify-start items-start px-3" >
            <p className="text-2xl font-bold capitalize">Jhon Doe</p>
            <p className="text-xs text-gray-500 uppercase">@web devoloper</p>
            <p className="text-sm w-full text-left ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit nobis totam laudantium, molestiae animi magnam vero repellendus aliquam quia!</p>
            <div className="w-full flex flex-row mt-3 ">
                <button className="py-1 mr-4 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Follow</button>
                <button className="py-1 px-4 text-blue-600 duration-200 ease-linear hover:bg-blue-600 rounded-2xl hover:text-white">Massage</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
