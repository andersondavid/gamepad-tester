import React from "react";

type PropTypes = {
  side: string;
  value: number;
};

export default function ShoulderBottomButton({ side, value }: PropTypes) {
  return (
    <div
      style={{ backgroundColor: `rgb(209 213 219/ ${value})` }}
      className={`
      border-4
    border-gray-300
      w-16
      h-24
      rounded-tl-3xl
      rounded-tr-3xl
      rounded-br-3xl
      rounded-bl-lg ${side == "left" ? "ml-auto -rotate-3" : "-scale-x-100 rotate-3"}`}
    ></div>
  );
}
