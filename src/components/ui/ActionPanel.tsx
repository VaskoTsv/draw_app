import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  PenTool as PenToolIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  CornerDownLeft as CornerDownLeftIcon,
  CornerDownRight as CornerDownRightIcon,
  Trash2 as Trash2Icon,
} from 'react-feather';

interface ActionPanelProps {}

const ActionPanel: React.FC<ActionPanelProps> = () => {
  const handleSlider = (sliderValue: number | number[]) => {
    console.log({ sliderValue });
  };

  return (
    <header className="h-60 p-10 flex flex-row gap-3 bg-white shadow-md">
      {/* Draw Instruments */}
      <div className="h-40 w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <PenToolIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <SquareIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <CircleIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <ArrowLeftIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <ArrowRightIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <ArrowUpIcon />
        </span>
      </div>
      {/* Slider */}
      <div className="w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
        <span className="flex items-center w-full max-h-10 m-2 p-3 bg-white">
          <Slider defaultValue={50} onChange={handleSlider} />
        </span>
      </div>
      {/* Undo/Redo */}
      <div className="w-40 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center items-center	gap-3">
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <CornerDownLeftIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <CornerDownRightIcon />
        </span>
        <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
          <Trash2Icon />
        </span>
      </div>
    </header>
  );
};

export default ActionPanel;
