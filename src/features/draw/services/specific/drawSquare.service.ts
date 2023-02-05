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

  // Note: Bad practice to implement not needed functions
  // but it's better than having to do multiple checks if
  // they exist in draw.store.ts
  draw() {}

  finishDrawing() {}
}

export default DrawSquareService;
