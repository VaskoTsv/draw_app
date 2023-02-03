import { makeAutoObservable, observable } from 'mobx';
import InstrumentsEnum from '~/features/draw/interfaces/instruments.interface';

class DrawStore {
  activeInstrument = InstrumentsEnum.Pen;

  constructor() {
    makeAutoObservable(
      this,
      {
        activeInstrument: observable,
      },
      { autoBind: true },
    );
  }

  setActiveInstrument(instrumentIndex: InstrumentsEnum) {
    if (this.activeInstrument === instrumentIndex) {
      return;
    }
    this.activeInstrument = instrumentIndex;
  }
}

const drawStore = new DrawStore();
export default drawStore;
