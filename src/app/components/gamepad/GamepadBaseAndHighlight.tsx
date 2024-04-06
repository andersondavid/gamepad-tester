import { useGamepad } from "@/app/api/gamepadApi";
import Image from "next/image";

export function GamepadBaseAndHighlight() {
  const getbuttons = useGamepad();

  const bt = getbuttons?.buttons || [];
  return (
    <div>
      <Image
        className="absolute"
        src={"/gamepad-base.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[0]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/a.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[1]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/b.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[3]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/y.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[2]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/x.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[13]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/down.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[14]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/left.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[12]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/up.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[15]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/right.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[9]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/start.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[8]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/select.png"}
        alt="Gamepad for xbox"
        fill={true}
      />

      <Image
        className={`absolute ${bt[16]?.value ? "opacity-100" : "opacity-0"}`}
        src={"/buttons_highlight/home.png"}
        alt="Gamepad for xbox"
        fill={true}
      />
    </div>
  );
}