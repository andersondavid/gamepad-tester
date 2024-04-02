import React from "react";
import ShoulderBottomButton from "./SholderBottomButton";
import ShoulderTopButton from "./ShoulderTopButton";

export default function SholderButtonsContainer() {
  return (
    <div className="flex justify-between w-[600px]">
      <div className="">
        <ShoulderBottomButton side="left" />
        <ShoulderTopButton side="left" />
      </div>
      <div className="">
        <ShoulderBottomButton side="right" />
        <ShoulderTopButton side="right" />
      </div>
    </div>
  );
}
