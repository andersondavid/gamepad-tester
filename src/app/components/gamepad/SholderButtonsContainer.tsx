import React from "react";
import ShoulderBottomButton from "./SholderBottomButton";
import ShoulderTopButton from "./ShoulderTopButton";
import { useGamepadConnected, useGetButtons } from "@/app/api/gamepadApi";

export default function SholderButtonsContainer() {
  const getbuttons = useGetButtons(useGamepadConnected());

  return (
    <div className="flex justify-between w-[600px]">
      <div className="">
        <ShoulderBottomButton
          side="left"
          value={getbuttons?.buttons[6].value || 0}
        />
        <ShoulderTopButton
          side="left"
          value={getbuttons?.buttons[4].value || 0}
        />
      </div>
      <div className="">
        <ShoulderBottomButton
          side="right"
          value={getbuttons?.buttons[7].value || 0}
        />
        <ShoulderTopButton
          side="right"
          value={getbuttons?.buttons[5].value || 0}
        />
      </div>
    </div>
  );
}
