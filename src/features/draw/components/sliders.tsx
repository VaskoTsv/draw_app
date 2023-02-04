import React from 'react';

import { observer } from 'mobx-react-lite';
import Slider from 'rc-slider';
import appStore from '~/store';

import 'rc-slider/assets/index.css';

const DrawSliders: React.FC = observer(() => (
  <span className="flex flex-col items-center w-full max-h-20 m-2 p-3 bg-white">
    <p>Stroke</p>
    <Slider
      min={1}
      max={50}
      defaultValue={appStore.drawStore.strokeWidth}
      onChange={appStore.drawStore.setStrokeWidth}
    />
    {/* TODO: Add slider for size maybe */}
  </span>
));

export default DrawSliders;
