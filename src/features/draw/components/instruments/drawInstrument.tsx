import React from 'react';

import { Icon as FeatherIcon } from 'react-feather';

import InstrumentsEnum from '../../interfaces/instruments.interface';

interface DrawInstrumentProps {
  activeInstrument: InstrumentsEnum;
  instrumentIndex: InstrumentsEnum;
  Icon: FeatherIcon;
  handleSelectInstrument: (index: InstrumentsEnum) => void;
}

const DrawInstrument: React.FC<DrawInstrumentProps> = ({
  activeInstrument,
  instrumentIndex,
  Icon,
  handleSelectInstrument,
}) => {
  const isActive = (checkIndex: InstrumentsEnum): boolean =>
    Boolean(activeInstrument === checkIndex);

  return (
    <span
      className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
      style={{ background: isActive(instrumentIndex) ? 'lightCyan' : '' }}
      onClick={() => handleSelectInstrument(instrumentIndex)}
    >
      <Icon />
    </span>
  );
};

export default DrawInstrument;
