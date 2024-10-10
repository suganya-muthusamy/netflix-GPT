import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full md:w-[50%] top-0 md:top-32 lg:top-60 left-0 md:left-12">
      <h1
        className=" hidden md:inline-block md:text-3xl lg:text-5xl tracking tracking-tighter
       font-bold"
      >
        {title.toUpperCase()}
      </h1>
      <p className="pt-4 hidden md:inline-block">{overview}</p>
      <div className="absolute left-0 right-0 bottom-0 w-fit m-auto md:top-32 md:m-0">
        <button className="absolute hidden md:inline-block md:static text-lg font-semibold w-[120px] px-0 md:px-6 py-2 bg-white rounded-md hover:bg-opacity-90 text-black  mr-0 md:mr-3 my-6">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block text-lg font-semibold px-6 py-2 bg-white bg-opacity-30 rounded-md hover:bg-opacity-40 text-white  my-6">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
