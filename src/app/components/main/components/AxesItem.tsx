import React from "react";

type PropTypes = {
  index: number;
  value: number;
};

export default function ButtonItem({ index, value }: PropTypes) {
  let numberFloat = value.toFixed(4);

  return (
    <div className="inline-block w-32 border-l-2 border-l-gray-700 pl-2 lg:block">
      <p className="-mb-2 font-monospace text-base text-gray-400">A{index}</p>
      <p className="font-monospace text-xl text-gray-200">{numberFloat}</p>
    </div>
  );
}
