import React from 'react';

import { observer } from 'mobx-react-lite';
import { Icon as FeatherIcon } from 'react-feather';
import appStore from '~/store';
import { DrawInstrumentsEnum } from '../../interfaces/drawInstruments.interface';

interface DrawInstrumentProps {
  instrumentIndex: DrawInstrumentsEnum;
  Icon: FeatherIcon;
  disabled: boolean;
}

const DrawInstrument: React.FC<DrawInstrumentProps> = observer(
  ({ instrumentIndex, Icon, disabled }) => {
    const isActive = (checkIndex: DrawInstrumentsEnum): boolean =>
      Boolean(appStore.drawStore.drawInstrument === checkIndex);

    return (
      <span
        className="flex items-center max-h-8 m-2 p-3 bg-white"
        style={{
          background: isActive(instrumentIndex) ? 'lightCyan' : '',
          cursor: !disabled ? 'pointer' : 'initial',
          opacity: !disabled ? '1' : '0.5',
        }}
        onClick={() => {
          if (disabled) return;
          appStore.drawStore.setDrawInstrument(instrumentIndex);
        }}
      >
        <Icon />
      </span>
    );
  },
);

export default DrawInstrument;
