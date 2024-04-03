import React from "react";

type PropTypes = {
  side: string;
  value: number;
};

export default function ShoulderTopButton({ side,value }: PropTypes) {
  return (
    <div
      style={{ backgroundColor: `rgb(209 213 219/ ${value})` }}
      className={`
      border-4
    border-gray-300
      w-36
      h-14
      rounded-tl-[100%]
      rounded-tr-2xl
      rounded-br-md
      rounded-bl-md ${side == "left" ? "" : "-scale-x-100"}`}
    ></div>
  );
}
