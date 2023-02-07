import { injectable } from 'tsyringe';

import { DrawInstrumentsEnum } from '~/features/draw/interfaces/drawInstruments.interface';

import DrawCircleService from '~/features/draw/services/specific/drawCircle.service';
import DrawSquareService from '~/features/draw/services/specific/drawSquare.service';
import DrawWithPencilService from '~/features/draw/services/specific/drawWithPencil.service';
import IDrawService from '../interfaces/drawService.interface';

interface IDrawFactoryService {
  service: IDrawService | undefined;
  initService: (context: CanvasRenderingContext2D, drawInstrument: DrawInstrumentsEnum) => void;
}

const DrawFactoryServiceSymbol: symbol = Symbol('DrawFactoryService');

@injectable()
class DrawFactoryService implements IDrawFactoryService {
  service: IDrawService | undefined;

  initService(context: CanvasRenderingContext2D, drawInstrument: DrawInstrumentsEnum) {
    if (drawInstrument === DrawInstrumentsEnum.Pen) {
      this.service = new DrawWithPencilService(context);
    } else if (drawInstrument === DrawInstrumentsEnum.Square) {
      this.service = new DrawSquareService(context);
    } else if (drawInstrument === DrawInstrumentsEnum.Circle) {
      this.service = new DrawCircleService(context);
    } else {
      throw new Error(
        'Error: No draw service was found for the currently selected drawInstrument!',
      );
    }
  }
}

export { DrawFactoryService, DrawFactoryServiceSymbol, IDrawFactoryService };
