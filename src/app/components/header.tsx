import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between m-auto">
      <div className="p-8">
        <h2 className="text-white text-3xl font-bold">GAMEPAD TESTER</h2>
      </div>
      <div className="">
        <a href="#" className="text-gray-200 p-8 inline-block">GITHUB</a>
        <a href="#" className="text-gray-200 p-8 inline-block">LINKEDIN</a>
      </div>
    </div>
  );
}
