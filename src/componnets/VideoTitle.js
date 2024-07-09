import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[50%]  top-[10%] md:top-[15%]  lg:top-[20%]  xl:top-[30%] absolute px-2 sm:px-5 md:px-15 lg:px-20">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="pt-4">{overview}</p>
      <div className="">
        <button className="text-lg font-semibold px-6 py-2 bg-white rounded-md hover:bg-opacity-90 text-black  mr-3 my-6">
          ▶️ Play
        </button>
        <button className="text-lg font-semibold px-6 py-2 bg-white bg-opacity-30 rounded-md hover:bg-opacity-40 text-white  my-6">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
