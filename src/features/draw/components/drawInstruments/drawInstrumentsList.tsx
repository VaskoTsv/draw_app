import React from 'react';

import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  Circle as CircleIcon,
  PenTool as PenToolIcon,
  Square as SquareIcon,
} from 'react-feather';
import { DrawInstrumentConfig, DrawInstrumentsEnum } from '../../interfaces/drawInstruments.interface';

import DrawInstrument from './drawInstrument';

const INSTRUMENTS: DrawInstrumentConfig[] = [
  {
    index: DrawInstrumentsEnum.Pen,
    icon: PenToolIcon,
    disabled: false,
  },
  {
    index: DrawInstrumentsEnum.Square,
    icon: SquareIcon,
    disabled: false,
  },
  {
    index: DrawInstrumentsEnum.Circle,
    icon: CircleIcon,
    disabled: false,
  },
  {
    index: DrawInstrumentsEnum.LeftArrow,
    icon: ArrowLeftIcon,
    disabled: true,
  },
  {
    index: DrawInstrumentsEnum.RightArrow,
    icon: ArrowRightIcon,
    disabled: true,
  },
  {
    index: DrawInstrumentsEnum.TopArrow,
    icon: ArrowUpIcon,
    disabled: true,
  },
];

const DrawInstruments: React.FC = () => (
  <>
    {INSTRUMENTS.map((instrument) => (
      <DrawInstrument
        key={instrument.index}
        instrumentIndex={instrument.index}
        Icon={instrument.icon}
        disabled={instrument.disabled}
      />
    ))}
  </>
);

export default DrawInstruments;
