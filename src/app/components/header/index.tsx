import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="p-5">
        <h2 className="text-white text-3xl font-bold">TESTER</h2>
      </div>
      <div className="flex">
        <a href="">
          <span className="text-white block text-xl p-6 px-9">Link</span>
        </a>
        <a href="">
          <span className="text-white block text-xl p-6 px-9">Link</span>
        </a>
      </div>
    </div>
  );
}
