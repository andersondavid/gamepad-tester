import React from "react";

type PropTypes = {
  index: number;
  value: number
}

export default function ButtonItem({index, value}: PropTypes) {

  let numberFloat = value.toFixed(2)

  return (
    <div className="inline-block ml-3 border-l-2 border-l-gray-700 pl-2 pb-2">
      <p className="text-base -mb-2 text-gray-400">B{index}</p>
      <p className="text-xl text-gray-200">{numberFloat}</p>
    </div>
  );
}
