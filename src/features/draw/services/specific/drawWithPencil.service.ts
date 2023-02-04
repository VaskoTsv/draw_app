import IDrawService from '../../interfaces/drawService.interface';

class DrawWithPencilService implements IDrawService {
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  startDrawing({ nativeEvent }: React.MouseEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.context.beginPath();
    this.context.moveTo(offsetX, offsetY);
  }

  finishDrawing() {
    this.context.closePath();
  }

  draw({ nativeEvent }: React.MouseEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.context.lineTo(offsetX, offsetY);
    this.context.stroke();
  }
}

export default DrawWithPencilService;
