import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full lg:w-96">
      <div className="border-b-4 border-orange-400 bg-zinc-800 px-10 py-6 text-justify text-gray-200">
        <p>
          The &quot;Gamepad Tester&quot; app has been designed to enable users
          to test the functionality of their gamepads across various devices,
          ensuring that the controls are in perfect condition for an optimal
          gaming experience.
        </p>
      </div>
      <div className="m-auto py-4 text-right">
        <a
          href="https://github.com/andersondavid/gamepad-tester"
          className="inline-block rounded-full border-2 border-orange-400 px-2 py-2 text-gray-200"
        >
          <span className="px-2">GITHUB</span>
          <span>
            <Image
              src={"/icons/github.png"}
              className="ml-4 inline-block"
              alt=""
              width="35"
              height="35"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
