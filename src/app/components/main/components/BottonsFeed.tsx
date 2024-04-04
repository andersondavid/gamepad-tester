import React, { useEffect } from "react";
import ButtonItem from "./ButtonItem";
import AxesItem from "./AxesItem";
import { useGamepad } from "@/app/api/gamepadApi";

export default function BottonsFeed() {
  const getbuttons = useGamepad();
  

  return (
    <>
      {getbuttons && (
        <div className="w-32">
          <p className="text-gray-200 text-xl border-l-2 border-l-gray-700 pl-2 pb-1">
            Buttons{" "}
            <span className="text-xs">{`(${getbuttons?.buttons.length})`}</span>
          </p>
          {getbuttons?.buttons.map((button, i) => (
            <ButtonItem key={"B" + i} index={i} value={button.value} />
          ))}
          <p className="text-gray-200 text-xl border-l-2 border-l-gray-700 pl-2 pb-1 mt-2">
            Axes{" "}
            <span className="text-xs">{`(${getbuttons?.axes.length})`}</span>
          </p>
          {getbuttons?.axes.map((axes, i) => (
            <AxesItem key={"A" + i} index={i} value={axes} />
          ))}
        </div>
      )}
    </>
  );
}
