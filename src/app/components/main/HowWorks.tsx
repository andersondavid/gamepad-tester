import React from "react";

export default function HowWorks() {
  return (
    <div className="h-fit w-full border-b-4 border-orange-400 bg-zinc-800 px-10 py-6 text-justify text-gray-200 lg:w-96">
      <p className="pb-3">
        When connected, this tool displays the current state of your gamepads,
        inputs, joysticks, and anything else that can be reported by the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          className="text-orange-400"
        >
          {" "}
          HTML5 Gamepad Api
        </a>
        .
      </p>

      <p className="pb-3">
        This is also useful for debugging drifting joycons, broken controllers,
        experimental hardware, and more.
      </p>

      <p className="pb-3">
        Are you a developer interested in using the Gamepad API? Check out this
        quick guide.
      </p>
    </div>
  );
}
