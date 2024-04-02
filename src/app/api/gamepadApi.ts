import { useEffect, useState } from "react";

function useGamepadConnected() {
  const [isGamepadConnected, setGamepadConnected] = useState<GamepadEvent | boolean>(false);
  useEffect(() => {
    function handleGamepadConnected(e: GamepadEvent) {
      setGamepadConnected(e);
      console.log('connected');
      
    }
    function handleGamepadDesconnected() {
      setGamepadConnected(false);
      console.log('desconnected');

    }
    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);

    return () => {
      window.addEventListener("gamepadconnected", handleGamepadConnected);
      window.addEventListener("gamepaddisconnected", handleGamepadDesconnected);
    };
  }, []);

  return isGamepadConnected
}

export {
  useGamepadConnected
}