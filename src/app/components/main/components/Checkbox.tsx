import React, { Dispatch, useState } from "react";

type PropsTypes = {
  label: string;
  value: boolean;
  id: string;
  dispatch: Dispatch<boolean>;
  state: boolean;
};

export default function Checkbox({ value, label, id, dispatch, state }: PropsTypes) {
  const [isChecked, setIsChecked] = useState(value);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(!state)
  };
  return (
    <div className="m-3 inline-block">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <label htmlFor={id} className="text-gray-200 text-xl cursor-pointer">
        <span
          className={`w-4 h-4 mr-2 rounded-sm border-[3px] border-orange-500 inline-block ${
            isChecked ? "bg-orange-500" : ""
          }`}
        ></span>
        {label}
      </label>
    </div>
  );
}
