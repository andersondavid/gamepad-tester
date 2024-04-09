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

  useEffect(() => {
    if (gamepad != null) {
      setGamepadOnline(true);
      console.log(gamepad);
    } else {
      setGamepadOnline(false);
    }
  }, [gamepad]);

  return (
    <div className="relative h-[450px] w-[450px] border-gray-50 lg:h-[720px] lg:w-[720px]">
      <div
        className={`duration-1000 ${
          gamepadOnline ? "pt-[0%] opacity-100" : "pt-[15%] opacity-0"
        }`}
      >
        <SholderButtonsContainer />
      </div>
      <GamepadBaseAndHighlight />
      <div
        className={`absolute left-[26.68%] top-[35.78%] h-14 w-14 origin-top-left duration-1000 lg:h-32 lg:w-32 ${gamepadOnline ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      >
        <AxesGraphic y={gamepad?.axes[1] || 0} x={gamepad?.axes[0] || 0} />
      </div>
      <div
        className={`absolute left-[62.08%] top-[49.58%] h-14 w-14 origin-top-left duration-1000 lg:h-32 lg:w-32 ${gamepadOnline ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
      >
        <AxesGraphic y={gamepad?.axes[3] || 0} x={gamepad?.axes[2] || 0} />
      </div>
      {/*  */}
      <div
        className={`absolute bottom-1/4 w-full text-center duration-100 ${gamepadOnline ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="text-2xl italic text-gray-400">Press any key..</h3>
      </div>
    </div>
  );
}
