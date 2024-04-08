import { useGamepad } from "@/app/api/gamepadApi";
import React, { useEffect, useState } from "react";
import AxesGraphic from "./AxesGraphic";
import { GamepadBaseAndHighlight } from "./GamepadBaseAndHighlight";
import SholderButtonsContainer from "./SholderButtonsContainer";

interface Controllers {
  [key: string]: string;
}

function getConsole(controllerName: string): string {
  const controllers: Controllers = {
    "xbox 360": "Xbox 360",
    "xbox one": "Xbox One",
    ps4: "PlayStation 4",
    "pro controller": "Nintendo Switch",
  };

  controllerName = controllerName.toLowerCase();

  for (let controller in controllers) {
    if (controllerName.includes(controller)) {
      return controllers[controller];
    }
  }

  return "Console not found";
}

export default function Gamepad() {
  const gamepad = useGamepad();
  const [gamepadOnline, setGamepadOnline] = useState<boolean>(false);
  const [gamepadInfo, setGamepadInfo] = useState<Gamepad | undefined>();

  useEffect(() => {
    if (gamepad != null) {
      setGamepadOnline(true);
      setGamepadInfo(gamepad);
      console.log(gamepad);
    } else {
      setGamepadOnline(false);
      setGamepadInfo(undefined);
    }
  }, [gamepad]);

  return (
    <div className="relative h-[1000px] w-[1000px] border-gray-50">
      <div
        className={`fixed left-1/2 top-4 -translate-x-1/2 duration-1000 ${
          gamepadOnline ? "pt-[0%] opacity-100" : "pt-[15%] opacity-0"
        }`}
      >
        <SholderButtonsContainer />
      </div>
      <GamepadBaseAndHighlight />
      <div
        className={`absolute left-[267px] top-[358px] origin-top-left duration-1000 ${gamepadOnline ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      >
        <AxesGraphic y={gamepad?.axes[1] || 0} x={gamepad?.axes[0] || 0} />
      </div>
      <div
        className={`absolute left-[621px] top-[496px] origin-top-left duration-1000 ${gamepadOnline ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      >
        <AxesGraphic y={gamepad?.axes[3] || 0} x={gamepad?.axes[2] || 0} />
      </div>
      <div
        className={`absolute bottom-0 text-gray-200 duration-1000 ${
          gamepadOnline ? "pb-[25%] opacity-100" : "pb-[15%] opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold">
          {getConsole(gamepadInfo?.id || "none")}
        </h1>
        <h1 className="text-2xl">{gamepadInfo?.id}</h1>
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
              <td>{gamepadInfo?.index}</td>
              <td>{gamepadInfo?.connected + ""}</td>
              <td>{gamepadInfo?.mapping}</td>
              <td>{gamepadInfo?.timestamp.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className={`absolute bottom-1/4 w-full text-center duration-100 ${gamepadOnline ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-2xl italic text-gray-400">Press any key..</h3>
      </div>
    </div>
  );
}
