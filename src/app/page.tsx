"use client";

import { useEffect, useState } from "react";

import Gamepad from "./components/gamepad";
import Header from "./components/header";
import Headline from "./components/main/Headline";
import AboutMe from "./components/main/AboutMe";
import TesterConfigs from "./components/main/TesterConfigs";
import BottonsFeed from "./components/main/components/BottonsFeed";
import SholderButtonsContainer from "./components/gamepad/SholderButtonsContainer";

import { useGamepadConnected } from "./api/gamepadApi";

export default function Home() {
  const gamepad = useGamepadConnected();

  const [gamepadOnline, setGamepadOnline] = useState<boolean>(false);
  const [showButtonsFeed, setShowButtonsFeed] = useState<boolean>(false);

  useEffect(() => {
    if (gamepad != false) {
      setGamepadOnline(true);
    } else {
      setGamepadOnline(false);
    }
  }, [gamepad]);

  useEffect(() => {}, [showButtonsFeed]);

  return (
    <main className="relative">
      <Header />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center">
        <Headline />
      </div>
      <div
        className={`fixed ${
          gamepadOnline ? "bottom-0" : "bottom-[-30%]"
        } left-1/2 -translate-x-1/2 duration-1000`}
      >
        <Gamepad />
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 duration-1000 ${
            gamepadOnline ? "opacity-100" : "opacity-0"
          }`}
        >
          <SholderButtonsContainer />
        </div>
        <div className="absolute w-1/2 top-[65%] left-1/2 -translate-x-1/2">
          <TesterConfigs
            showButtonsFeedFc={{ showButtonsFeed, setShowButtonsFeed }}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0">
        <AboutMe />
      </div>
      {showButtonsFeed && <div className="fixed right-0 top-28">
        <BottonsFeed />
      </div>} 
    </main>
  );
}
