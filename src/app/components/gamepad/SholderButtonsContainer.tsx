import React from "react";
import ShoulderBottomButton from "./SholderBottomButton";
import ShoulderTopButton from "./ShoulderTopButton";
import { useGamepad } from "@/app/api/gamepadApi";

export default function SholderButtonsContainer() {
  const getbuttons = useGamepad();

  return (
    <div className="flex w-full justify-between px-[20%] py-4 lg:py-0">
      <div className="h-14 w-12 lg:h-28 lg:w-24">
        <ShoulderBottomButton
          side="left"
          value={getbuttons?.buttons[6].value || 0}
        />
        <ShoulderTopButton
          side="left"
          value={getbuttons?.buttons[4].value || 0}
        />
      </div>
      <div className="h-14 w-12 lg:h-28 lg:w-24">
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
