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
      h-[70%]
      w-[40%]
      rounded-bl-lg
      rounded-br-3xl
      rounded-tl-3xl
      rounded-tr-3xl
      border-4
      border-gray-300 ${side == "left" ? "ml-auto -rotate-3" : "rotate-3 -scale-x-100"}`}
    ></div>
  );
}
