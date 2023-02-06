import { injectable } from 'tsyringe';

interface IClearCanvasService {
  clear: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => void;
}

const ClearCanvasSymbol: symbol = Symbol('ClearCanvasService');

@injectable()
class ClearCanvasService implements IClearCanvasService {
  clear(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    if (!canvas || !context) {
      return;
    }
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export { ClearCanvasService, ClearCanvasSymbol, IClearCanvasService };
