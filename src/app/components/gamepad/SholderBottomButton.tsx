import React from "react";

type PropTypes = {
  side: string;
};

export default function ShoulderBottomButton({ side }: PropTypes) {
  return (
    <div
      className={`
      border-4
    border-gray-300
      w-16
      h-24
      rounded-tl-3xl
      rounded-tr-3xl
      rounded-br-3xl
      rounded-bl-lg ${side == "left" ? "ml-auto" : "-scale-x-100"}`}
    ></div>
  );
}
