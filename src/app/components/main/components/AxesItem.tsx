import React from "react";

type PropTypes = {
  index: number;
  value: number;
};

export default function ButtonItem({ index, value }: PropTypes) {
  let numberFloat = value.toFixed(4);

  return (
    <div className="block w-32 border-l-2 border-l-gray-700 pl-2">
      <p className="text-base -mb-2 text-gray-400 font-monospace">A{index}</p>
      <p className="text-xl text-gray-200 font-monospace">{numberFloat}</p>
    </div>
  );
}
