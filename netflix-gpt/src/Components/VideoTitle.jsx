import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/2">{overview}</p>
      <div>
        <button className="bg-white py-2 font-semibold text-black p-2 border border-black rounded-lg mx-1 px-12 bg-opacity-85 hover:bg-opacity-65">
          ▶️ Play
        </button>
        <button className="bg-gray-600 py-2 font-semibold text-white p-2 border border-black rounded-lg mx-1 px-10 bg-opacity-85 hover:bg-opacity-55">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
