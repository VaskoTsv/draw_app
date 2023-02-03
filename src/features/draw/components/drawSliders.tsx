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
    <span className="flex flex-col items-center w-full max-h-20 m-2 p-3 bg-white">
      <p>Stroke</p>
      <Slider defaultValue={stroke} onChange={handleStrokeSlider} />
    </span>
  );
};

export default DrawSliders;
