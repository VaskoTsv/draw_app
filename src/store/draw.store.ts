import { makeAutoObservable, observable } from 'mobx';

import DrawInstrumentsEnum from '~/features/draw/interfaces/instruments.interface';

class DrawStore {
  drawInstrument = DrawInstrumentsEnum.Pen;

  strokeWidth = 50;

  constructor() {
    makeAutoObservable(
      this,
      {
        drawInstrument: observable,
        strokeWidth: observable,
      },
      { autoBind: true },
    );
  }

  setDrawInstrument(instrumentIndex: DrawInstrumentsEnum) {
    if (this.drawInstrument === instrumentIndex) {
      return;
    }
    this.drawInstrument = instrumentIndex;
  }

  setStrokeWidth(width: number | number[]) {
    this.strokeWidth = width as number;
  }
}

const drawStore = new DrawStore();
export default drawStore;
