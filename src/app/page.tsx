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
      <div className="relative h-[450px] w-full lg:h-[720px] 2xl:h-screen">
        <div className="absolute left-1/2 -z-10 -translate-x-1/2 pt-8 2xl:top-1/2 2xl:-translate-y-1/2 2xl:pt-0">
          <Gamepad />
        </div>
      </div>

      <div className="px-[10%] lg:absolute lg:left-1/2 lg:top-[400px] lg:-translate-x-2/3 lg:translate-y-1/2 lg:px-0 2xl:top-1/2 ">
        <AboutGamepad />
      </div>

      <div className="top-1/4 w-full items-start px-10 lg:flex lg:justify-evenly lg:px-[5%] 2xl:fixed 2xl:justify-between">
        <div className="flex flex-col lg:flex-col 2xl:flex-col-reverse">
          <BottonsFeed />
          <About />
        </div>
        <HowWorks />
      </div>
      <div className="bottom-0 right-0 2xl:fixed">
        <MakeWith />
      </div>
    </main>
  );
}
