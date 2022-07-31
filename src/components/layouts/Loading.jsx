import React from "react";

const Loading = () => {
  return (
    <div className="absolute w-full bg-gray-200 opacity-80 min-h-screen z-20 flex justify-center items-center">
      <div
        className=" animate-ping inline-block w-12 h-12 bg-current bg-red-900 rounded-full "
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
