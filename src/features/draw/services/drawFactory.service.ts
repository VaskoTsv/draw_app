import { DrawInstrumentsEnum } from '../interfaces/drawInstruments.interface';

import DrawCircleService from './specific/drawCircle.service';
import DrawSquareService from './specific/drawSquare.service';
import DrawWithPencilService from './specific/drawWithPencil.service';

class DrawFactoryService {
  instrumentType: DrawInstrumentsEnum | null;

  context: CanvasRenderingContext2D | null;

  constructor() {
    this.instrumentType = null;
    this.context = null;
  }

  initDrawerFactory(type: DrawInstrumentsEnum, context: CanvasRenderingContext2D) {
    this.instrumentType = type;
    this.context = context;
  }

  createDrawService() {
    if (!this.context) {
      throw new Error('Canvas Context is missing from DrawFactoryService!');
    }

    let drawer;

    if (this.instrumentType === DrawInstrumentsEnum.Pen) {
      drawer = new DrawWithPencilService(this.context);
    } else if (this.instrumentType === DrawInstrumentsEnum.Square) {
      drawer = new DrawSquareService(this.context);
    } else if (this.instrumentType === DrawInstrumentsEnum.Circle) {
      drawer = new DrawCircleService(this.context);
    }

    return drawer;
  }
}

export default DrawFactoryService;
