import { makeAutoObservable, observable } from 'mobx';

import DrawInstrumentsEnum from '~/features/draw/interfaces/instruments.interface';

class DrawStore {
  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  isDrawing: boolean = false;

  drawInstrument = DrawInstrumentsEnum.Pen;

  strokeWidth = 1;

  constructor() {
    makeAutoObservable(
      this,
      {
        canvas: observable,
        context: observable,
        isDrawing: observable,
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

  setCanvas(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.canvas.width = window.innerWidth * 2;
    this.canvas.height = window.innerHeight * 2;

    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.context.scale(2, 2);
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = this.strokeWidth;
  }

  startDrawing({ nativeEvent }: React.MouseEvent) {
    const { offsetX, offsetY } = nativeEvent;
    this.context?.beginPath();
    this.context?.moveTo(offsetX, offsetY);
    this.isDrawing = true;
  }

  finishDrawing() {
    this.context?.closePath();
    this.isDrawing = false;
  }

  draw({ nativeEvent }: React.MouseEvent) {
    if (!this.isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    this.context?.lineTo(offsetX, offsetY);
    this.context?.stroke();
  }

  clearCanvas() {
    if (!this.canvas || !this.context) {
      return;
    }

    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const drawStore = new DrawStore();
export default drawStore;
