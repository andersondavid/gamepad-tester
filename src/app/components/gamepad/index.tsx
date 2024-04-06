import { useGamepad } from "@/app/api/gamepadApi";
import React from "react";
import AxesGraphic from "./AxesGraphic";
import { GamepadBaseAndHighlight } from "./GamepadBaseAndHighlight";

export default function Gamepad() {
  const gamepad = useGamepad();

  return (
    <div className="relative h-[1000px] w-[1000px] border-gray-50">
      <GamepadBaseAndHighlight />
      <div className="absolute left-[267px] top-[358px]">
        <AxesGraphic y={gamepad?.axes[1] || 0} x={gamepad?.axes[0] || 0} />
      </div>
      <div className="absolute left-[621px] top-[496px]">
        <AxesGraphic y={gamepad?.axes[3] || 0} x={gamepad?.axes[2] || 0} />
      </div>
      <div className="absolute bottom-0 pb-[25%] text-gray-200">
        <h1 className="text-4xl font-bold">Xbox 360 Controller</h1>
        <h1 className="text-2xl">
          Xbox 360 Controller (XInput STANDARD GAMEPAD)
        </h1>
        <table>
          <thead>
            <tr>
              <th className="pr-4 text-left">index</th>
              <th className="pr-4 text-left">connected</th>
              <th className="pr-4 text-left">mapping</th>
              <th className="pr-4 text-left">timesptamp</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-orange-500">
              <td>0</td>
              <td>true</td>
              <td>standard</td>
              <td>12.234234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
