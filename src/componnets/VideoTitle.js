import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[50%] h-screen absolute aspect-video flex flex-col justify-center  px-2 sm:px-5 md:px-15 lg:px-20 bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="pt-4">{overview}</p>
      <div className="">
        <button className="text-lg font-semibold px-6 py-2 bg-white rounded-md text-black  mx-2 my-6">
          ▶️ Play
        </button>
        <button className="text-lg font-semibold px-6 py-2 bg-white bg-opacity-30 rounded-md text-white  mx-2 my-6">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
