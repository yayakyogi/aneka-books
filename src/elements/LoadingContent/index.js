import React from "react";

const LoadingContent = (props) => {
  return (
    <div className="loading h-screen w-screen flex justify-center items-center">
      <h1 className="text-3xl font-light">{props.message}</h1>
    </div>
  );
};

export default LoadingContent;
