import IDrawService from '../../interfaces/drawService.interface';

class DrawWithPencilService implements IDrawService {
  context: CanvasRenderingContext2D;

  isDrawing: boolean = false;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  startDrawing({ nativeEvent }: React.MouseEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.context.beginPath();
    this.context.moveTo(offsetX, offsetY);
    this.isDrawing = true;
  }

  draw({ nativeEvent }: React.MouseEvent) {
    if (!this.isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    this.context.lineTo(offsetX, offsetY);
    this.context.stroke();
  }

  finishDrawing() {
    this.context.closePath();
    this.isDrawing = false;
  }
}

export default DrawWithPencilService;
