import React from "react";

const Page = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-center xl:px-52 lg:bg-[#F0F2F5] h-screen lg:pb-40">
      <div className="left hidden lg:block">
        <div className="text-blue-600 text-6xl font-bold w-fit">facebook</div>
        <div className=" lg:text-xl lg:w-96 xl:text-2xl xl:w-2/3 ">
          Facebook helps you connect and share with the people in your life.
        </div>
      </div>
      <div className="Right mt-20 lg:border lg:rounded-lg p-3 lg:bg-white ">
        <h1 className="text-3xl text-blue-600 font-bold flex justify-center lg:hidden mt-5">
          facebook
        </h1>
        <div className="flex justify-center">
          <input
            className="w-72 md:w-96 sm:w-80 mt-3 border p-3 outline-blue-600"
            placeholder="Mobile number or Email Address"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-center">
          <input
            className="w-72 mt-3 md:w-96 sm:w-80 border p-3 outline-blue-600"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-700 md:w-96 sm:w-80 w-72 p-2 rounded-md mt-3 text-white font-bold">
            Log In
          </button>
        </div>
        <div className="text-blue-700 mt-3 flex justify-center cursor-pointer hover:underline ">
          forgotten password?
        </div>
        <hr className="mt-3 mx-2 " />
        <div className="flex justify-center ">
          <div className="border mt-3 w-60 text-md text-center cursor-pointer p-2 lg:bg-[#42B72A] lg:p-4 lg:rounded-md lg:text-white lg:text-lg lg:font-bold">
            Create new account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
