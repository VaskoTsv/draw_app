import React, { useState } from 'react';
import {
  PenTool as PenToolIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
} from 'react-feather';

interface DrawInstrumentsProps {}

enum Instruments {
  Pen = 0,
  Square = 1,
  Circle = 2,
  LeftArrow = 3,
  RightArrow = 4,
  TopArrow = 5,
}

const DrawInstruments: React.FC<DrawInstrumentsProps> = () => {
  const [activeInstrument, setActiveInstrument] = useState<number>(Instruments.Pen);

  const handleSelectInstrument = (index: number) => {
    if (activeInstrument === index) {
      return;
    }
    setActiveInstrument(index);
  };

  const isActive = (checkIndex: number): boolean => Boolean(activeInstrument === checkIndex);

  return (
    <div className="h-40 w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      {/* TODO - this span can be extracted as separate component */}
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.Pen) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.Pen)}
      >
        <PenToolIcon />
      </span>
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.Square) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.Square)}
      >
        <SquareIcon />
      </span>
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.Circle) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.Circle)}
      >
        <CircleIcon />
      </span>
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.LeftArrow) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.LeftArrow)}
      >
        <ArrowLeftIcon />
      </span>
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.RightArrow) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.RightArrow)}
      >
        <ArrowRightIcon />
      </span>
      <span
        className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
        style={{ background: isActive(Instruments.TopArrow) ? 'lightCyan' : '' }}
        onClick={() => handleSelectInstrument(Instruments.TopArrow)}
      >
        <ArrowUpIcon />
      </span>
    </div>
  );
};

export default DrawInstruments;
