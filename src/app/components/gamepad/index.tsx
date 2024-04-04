import { useGamepadConnected, useGetButtons } from "@/app/api/gamepadApi";
import Image from "next/image";
import React from "react";

export default function Gamepad() {

  const getbuttons = useGetButtons(useGamepadConnected());
  const bt = getbuttons?.buttons || []

  return (
    <div className="w-[1000px] h-[1000px] relative">
        <Image className="absolute" src={"/gamepad-base.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>
        {bt[0]?.value > 0 && <Image className="absolute" src={"/buttons_highlight/a.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[1]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/b.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[3]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/y.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[2]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/x.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[13]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/down.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[14]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/left.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[12]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/up.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[15]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/right.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[9]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/start.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[8]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/select.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
        {bt[16]?.value > 0  && <Image className="absolute" src={"/buttons_highlight/home.png"} alt="Gamepad for xbox" objectFit="cover" fill={true}/>}
    </div>
  );
}
