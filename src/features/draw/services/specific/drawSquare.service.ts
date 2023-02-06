import IDrawService from '../../interfaces/drawService.interface';

class DrawSquareService implements IDrawService {
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  startDrawing({ nativeEvent }: React.MouseEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.context.strokeRect(offsetX, offsetY, 300, 300);
  }
}

export default DrawSquareService;
