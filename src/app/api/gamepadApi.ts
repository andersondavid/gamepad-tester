import { useEffect, useState } from "react";

function useGamepadConnected() {
  const [isGamepadConnected, setGamepadConnected] = useState<
    GamepadEvent | boolean
  >(false);

  return isGamepadConnected;
}

function useGamepad() {
  const [isGamepadConnected, setGamepadConnected] =
    useState<GamepadEvent | null>(null);
  const [gamepadInstance, setGamepadInstance] = useState<Gamepad | null>(null);

  useEffect(() => {
    function handleGamepadConnected(e: GamepadEvent) {
      setGamepadConnected(e);
      console.log("connected", e);
    }
    function handleGamepadDesconnected() {
      setGamepadConnected(null);
      console.log("desconnected");
    }
    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);

    return () => {
      window.addEventListener("gamepadconnected", handleGamepadConnected);
      window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isGamepadConnected) {
      intervalId = setInterval(() => {
        setGamepadInstance(
          navigator.getGamepads()[isGamepadConnected.gamepad.index]
        );
      }, 15);
    } else {
      setGamepadInstance(null);
    }

    return () => {
      clearInterval(intervalId);
      setGamepadInstance(null);
    };
  }, [isGamepadConnected]);

  return gamepadInstance;
}

export { useGamepadConnected, useGamepad };
