import React from 'react';

import {
  PenTool as PenToolIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
} from 'react-feather';

import InstrumentsEnum from '../../interfaces/instruments.interface';
import DrawInstrument from './drawInstrument';

const INSTRUMENTS = [
  {
    index: InstrumentsEnum.Pen,
    icon: PenToolIcon,
  },
  {
    index: InstrumentsEnum.Square,
    icon: SquareIcon,
  },
  {
    index: InstrumentsEnum.Circle,
    icon: CircleIcon,
  },
  {
    index: InstrumentsEnum.LeftArrow,
    icon: ArrowLeftIcon,
  },
  {
    index: InstrumentsEnum.RightArrow,
    icon: ArrowRightIcon,
  },
  {
    index: InstrumentsEnum.TopArrow,
    icon: ArrowUpIcon,
  },
];

const DrawInstruments: React.FC = () => {
  return (
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
};

export default DrawInstruments;
