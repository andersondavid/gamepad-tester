import React, { useEffect, useState } from "react";

type PropTypes = {
  x: number | 0;
  y: number | 0;
};

export default function AxesGraphic(axes: PropTypes) {
  const [axesPos, setAxesPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [lineLength, setLineLength] = useState<number>();

  useEffect(() => {
    const { x, y } = axes;
    const posX = x * 80;
    const posY = y * 80;

    setAxesPos({ x: posX, y: posY });
  }, [axes]);

  const calculateLenght = (x: number, y: number) => {
    return Math.sqrt(x * x + y * y);
  };

  const calculateAngle = (x: number, y: number) => {
    const radians = Math.atan2(y, x);
    return radians * (180 / Math.PI) + 'deg';
  };

  return (
    <div className="relative h-40 w-40">
      <div className="h-full w-full -translate-x-20 -translate-y-20 rounded-full border-2 border-gray-200"></div>
      <div
        className={`absolute -ml-[8px] -mt-[8px] h-[16px] w-[16px] rounded-full bg-orange-500`}
        style={{ left: axesPos.x, top: axesPos.y }}
      ></div>
      <hr
        className={`absolute top-0 border-l-[1px]  ml-[-1px] border-orange-500 origin-top-left`}
        style={{ width: calculateLenght(axesPos.x, axesPos.y), rotate: calculateAngle(axesPos.x, axesPos.y) }}
      ></hr>
    </div>
  );
}
