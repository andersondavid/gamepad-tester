import React from "react";

type PropTypes = {
  index: number;
  value: number;
};

export default function ButtonItem({ index, value }: PropTypes) {
  let numberFloat = value.toFixed(2);

  return (
    <div className="inline-block w-16 border-l-2 border-l-gray-700 pl-2">
      <p className="-mb-2 font-monospace text-base text-gray-400">B{index}</p>
      <p className="font-monospace text-xl text-gray-200">{numberFloat}</p>
    </div>
  );
}
