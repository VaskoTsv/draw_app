import React from 'react';

import { observer } from 'mobx-react-lite';
import appStore from '~/store';

import { Icon as FeatherIcon } from 'react-feather';

import InstrumentsEnum from '../../interfaces/instruments.interface';

interface DrawInstrumentProps {
  instrumentIndex: InstrumentsEnum;
  Icon: FeatherIcon;
}

const DrawInstrument: React.FC<DrawInstrumentProps> = observer(({ instrumentIndex, Icon }) => {
  const isActive = (checkIndex: InstrumentsEnum): boolean =>
    Boolean(appStore.drawStore.activeInstrument === checkIndex);

  return (
    <span
      className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
      style={{ background: isActive(instrumentIndex) ? 'lightCyan' : '' }}
      onClick={() => appStore.drawStore.setActiveInstrument(instrumentIndex)}
    >
      <Icon />
    </span>
  );
});

export default DrawInstrument;
