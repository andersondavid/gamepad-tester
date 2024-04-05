import { useGamepad } from "@/app/api/gamepadApi";
import Image from "next/image";
import React from "react";
import AxesGraphic from "./AxesGraphic";

function GamepadBaseAndHighlight() {
  const getbuttons = useGamepad();
  const bt = getbuttons?.buttons || [];
  return (
    <div>
      <Image
        className="absolute"
        src={"/gamepad-base.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[0]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/a.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[1]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/b.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[3]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/y.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[2]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/x.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[13]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/down.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[14]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/left.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[12]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/up.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[15]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/right.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[9]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/start.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[8]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/select.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />

      <Image
        className={`absolute ${bt[16]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/home.png"}
        alt="Gamepad for xbox"
        objectFit="cover"
        fill={true}
      />
    </div>
  );
}

export default function Gamepad() {
  const gamepad = useGamepad()

  return (
    <div className="w-[1000px] h-[1000px] relative border-gray-50">
      <GamepadBaseAndHighlight />
      <div className="absolute top-[358px] left-[267px]">
        <AxesGraphic y={gamepad?.axes[1] || 0} x={gamepad?.axes[0] || 0} />
      </div>
      <div className="absolute top-[496px] left-[621px]">
        <AxesGraphic y={gamepad?.axes[3] || 0} x={gamepad?.axes[2] || 0}  />
      </div>
    </div>
  );
}
