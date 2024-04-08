import React from "react";

export default function Header() {
  return (
    <div className="m-auto flex justify-between">
      <div className=" p-2 lg:p-8">
        <h2 className="text-xl font-bold text-white lg:text-3xl">
          GAMEPAD TESTER
        </h2>
      </div>
      <div className="text-right">
        <a href="#" className="inline-block p-2 text-gray-200 lg:p-8">
          GITHUB
        </a>
        <a href="#" className="inline-block p-2 text-gray-200 lg:p-8">
          LINKEDIN
        </a>
      </div>
    </div>
  );
}
