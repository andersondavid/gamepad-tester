import React from "react";
import ButtonItem from "./ButtonItem";
import AxesItem from "./AxesItem";
import { useGamepad } from "@/app/api/gamepadApi";

export default function BottonsFeed() {
  const getbuttons = useGamepad();

  return (
    <div
      className={`py-6 duration-1000 lg:w-96 ${getbuttons ? "opacity-100" : "opacity-0"}`}
    >
      <p className="border-l-2 border-l-gray-700 pb-1 pl-2 text-xl text-gray-200">
        Buttons{" "}
        <span className="text-xs">{`(${getbuttons?.buttons.length})`}</span>
      </p>
      {getbuttons?.buttons.map((button, i) => (
        <ButtonItem key={"B" + i} index={i} value={button.value} />
      ))}
      <p className="mt-2 border-l-2 border-l-gray-700 pb-1 pl-2 text-xl text-gray-200">
        Axes <span className="text-xs">{`(${getbuttons?.axes.length})`}</span>
      </p>
      {getbuttons?.axes.map((axes, i) => (
        <AxesItem key={"A" + i} index={i} value={axes} />
      ))}
    </div>
  );
}
