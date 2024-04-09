import React from "react";

type PropTypes = {
  side: string;
  value: number;
};

export default function ShoulderTopButton({ side, value }: PropTypes) {
  return (
    <div
      style={{ backgroundColor: `rgb(209 213 219/ ${value})` }}
      className={`
      h-[30%]
      w-[100%]
      rounded-bl-md
      rounded-br-md
      rounded-tl-[100%]
      rounded-tr-2xl
      border-4
      border-gray-300 ${side == "left" ? "" : "-scale-x-100"}`}
    ></div>
  );
}
