import React from "react";

type PropTypes = {
  index: number;
  value: number
}

export default function ButtonItem({index, value}: PropTypes) {

  let numberFloat = value.toFixed(2)

  return (
    <div className="inline-block border-l-2 border-l-gray-700 w-16 pl-2">
      <p className="text-base -mb-2 text-gray-400 font-monospace">B{index}</p>
      <p className="text-xl text-gray-200 font-monospace">{numberFloat}</p>
    </div>
  );
}
