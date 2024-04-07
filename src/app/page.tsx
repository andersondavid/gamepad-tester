"use client";
import Gamepad from "./components/gamepad/Gamepad";
import Header from "./components/header";
import About from "./components/main/About";
import MakeWith from "./components/main/MakeWith";
import BottonsFeed from "./components/main/components/BottonsFeed";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Gamepad />
      </div>
      <div className="absolute right-[15%] top-1/3">
        <About />
      </div>
      <div className="fixed left-14 top-28">
        <BottonsFeed />
      </div>
      <div className="fixed bottom-0 right-0">
        <MakeWith />
      </div>
    </main>
  );
}
