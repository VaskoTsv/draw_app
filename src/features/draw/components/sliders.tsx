import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface DrawSlidersProps {}

const DrawSliders: React.FC<DrawSlidersProps> = () => {
  const [stroke, setStroke] = useState(50);

  const handleStrokeSlider = (sliderValue: number | number[]) => {
    setStroke(sliderValue as number);
  };

  return (
    <div className="w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      <span className="flex flex-col items-center w-full max-h-20 m-2 p-3 bg-white">
        <p>Stroke</p>
        <Slider defaultValue={stroke} onChange={handleStrokeSlider} />
      </span>
    </div>
  );
};

export default DrawSliders;
