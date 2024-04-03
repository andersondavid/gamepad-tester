import { useEffect, useState } from "react";

function useGamepadConnected() {
  const [isGamepadConnected, setGamepadConnected] = useState<
    GamepadEvent | boolean
  >(false);
  useEffect(() => {
    function handleGamepadConnected(e: GamepadEvent) {
      setGamepadConnected(e);
      console.log("connected");
    }
    function handleGamepadDesconnected() {
      setGamepadConnected(false);
      console.log("desconnected");
    }
    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);

    return () => {
      window.addEventListener("gamepadconnected", handleGamepadConnected);
      window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);
    };
  }, []);

  return isGamepadConnected;
}

function useGetButtons(isGamepadConnected: GamepadEvent | boolean) {
  const [gamepadState , setGamepadState] = useState<(Gamepad | null)>()
  useEffect(() => {

    const intervalId = setInterval(() => {
      setGamepadState(navigator.getGamepads()[0]);
    }, 60);
    
    return () => clearInterval(intervalId);
  }, [isGamepadConnected]);

  return gamepadState

}

export { useGamepadConnected, useGetButtons };
