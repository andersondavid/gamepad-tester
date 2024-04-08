"use client";
import Gamepad from "./components/gamepad/Gamepad";
import Header from "./components/header";
import About from "./components/main/About";
import AboutGamepad from "./components/main/AboutGamepad";
import HowWorks from "./components/main/HowWorks";
import MakeWith from "./components/main/MakeWith";
import BottonsFeed from "./components/main/components/BottonsFeed";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-x-hidden">
      <div className="absolute w-full">
        <Header />
      </div>

      <div>
        <div className="absolute left-1/2 -translate-x-1/2 pt-16 lg:top-1/2 lg:-translate-y-1/2 lg:pt-0">
          <Gamepad />
        </div>

        <div className="p-4 pt-[450px]">
          <AboutGamepad />
        </div>
        <div className="lg:fixed lg:left-14 lg:top-28 lg:pt-0">
          <BottonsFeed />
        </div>
      </div>

      <div>
        <div className="lg:flex w-full justify-between px-[10%]">
          <About />
          <HowWorks />
        </div>
        <div className="lg:fixed bottom-0 right-0">
          <MakeWith />
        </div>
      </div>
    </main>
  );
}
