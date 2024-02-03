import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 xl:px-24 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-2xl xl:text-5xl font-bold w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden xl:inline-block">{overview}</p>
      <div className="my-4 xl:m-0">
        <button className="bg-white text-black py-1 xl:py-4 px-3 xl:px-12 text-lg xl:text-xl rounded-md hover:bg-opacity-80 ">
          Play
        </button>
        <button className="hidden xl:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
