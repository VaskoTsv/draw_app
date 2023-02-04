import { Icon } from 'react-feather';

enum DrawInstrumentsEnum {
  Pen = 0,
  Square = 1,
  Circle = 2,
  LeftArrow = 3,
  RightArrow = 4,
  TopArrow = 5,
}

interface DrawInstrumentConfig {
  index: DrawInstrumentsEnum;
  icon: Icon;
  disabled: boolean;
}

export { DrawInstrumentsEnum, DrawInstrumentConfig };
