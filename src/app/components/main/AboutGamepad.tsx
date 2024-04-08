import { useGamepad } from "@/app/api/gamepadApi";
import React, { useEffect, useState } from "react";

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

export default function AboutGamepad() {
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
    <div
      className={`text-gray-200 duration-1000 ${
        gamepadOnline ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-2xl font-bold">
        {getConsole(gamepadInfo?.id || "none")}
      </h1>
      <h1 className="text-xl">{gamepadInfo?.id}</h1>
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
  );
}
