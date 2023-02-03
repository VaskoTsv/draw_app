import React from 'react';

import { observer } from 'mobx-react-lite';
import { Icon as FeatherIcon } from 'react-feather';
import appStore from '~/store';

import DrawInstrumentsEnum from '../../interfaces/instruments.interface';

interface DrawInstrumentProps {
  instrumentIndex: DrawInstrumentsEnum;
  Icon: FeatherIcon;
}

const DrawInstrument: React.FC<DrawInstrumentProps> = observer(({ instrumentIndex, Icon }) => {
  const isActive = (checkIndex: DrawInstrumentsEnum): boolean =>
    Boolean(appStore.drawStore.drawInstrument === checkIndex);

  return (
    <span
      className="flex items-center max-h-8 m-2 p-3 cursor-pointer bg-white"
      style={{ background: isActive(instrumentIndex) ? 'lightCyan' : '' }}
      onClick={() => appStore.drawStore.setDrawInstrument(instrumentIndex)}
    >
      <Icon />
    </span>
  );
});

export default DrawInstrument;
