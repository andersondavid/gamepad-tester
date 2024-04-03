import React from "react";
import ButtonItem from "./ButtonItem";
import { useGetButtons, useGamepadConnected } from "@/app/api/gamepadApi";

export default function BottonsFeed() {
  const getbuttons = useGetButtons(useGamepadConnected());
  return (
    <div className="w-36">
      {getbuttons?.buttons.map((button, i) => (
        <ButtonItem key={"B" + i} index={i} value={button.value} />
      ))}
    </div>
  );
}
