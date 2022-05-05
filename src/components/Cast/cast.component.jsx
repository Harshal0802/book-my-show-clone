import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={props.img}
            alt={props.castName}
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-gray-800 text-xl">{props.castName}</h1>
        <h5 className="text-gray-500 text-xs">as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
