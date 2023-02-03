import React from 'react';

import {
  PenTool as PenToolIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
} from 'react-feather';

import DrawInstrumentsEnum from '../../interfaces/instruments.interface';
import DrawInstrument from './drawInstrument';

const INSTRUMENTS = [
  {
    index: DrawInstrumentsEnum.Pen,
    icon: PenToolIcon,
  },
  {
    index: DrawInstrumentsEnum.Square,
    icon: SquareIcon,
  },
  {
    index: DrawInstrumentsEnum.Circle,
    icon: CircleIcon,
  },
  {
    index: DrawInstrumentsEnum.LeftArrow,
    icon: ArrowLeftIcon,
  },
  {
    index: DrawInstrumentsEnum.RightArrow,
    icon: ArrowRightIcon,
  },
  {
    index: DrawInstrumentsEnum.TopArrow,
    icon: ArrowUpIcon,
  },
];

const DrawInstruments: React.FC = () => (
    <>
      {INSTRUMENTS.map((instrument) => (
        <DrawInstrument
          key={instrument.index}
          instrumentIndex={instrument.index}
          Icon={instrument.icon}
        />
      ))}
    </>
  );

export default DrawInstruments;
