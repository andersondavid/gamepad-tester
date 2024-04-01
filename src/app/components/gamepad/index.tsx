import Image from "next/image";
import React from "react";

export default function Gamepad() {
  return (
    <div className="w-[1000px] h-[1000px] relative">
        <Image className="absolute" src={"/gamepad-base.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>
        <Image className="absolute" src={"/pressed.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>
    </div>
  );
}
