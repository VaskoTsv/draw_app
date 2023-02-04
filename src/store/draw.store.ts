import { makeAutoObservable, observable } from 'mobx';

import { DrawFactoryService } from '~/features/draw';

import { DrawInstrumentsEnum } from '~/features/draw/interfaces/drawInstruments.interface';
import IDrawService from '~/features/draw/interfaces/drawService.interface';

// TODO: fix this import
import UndoRedoService from '~/features/undoRedo/services/undoRedo.service';

class DrawStore {
  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  isDrawing: boolean = false;

  drawInstrument = DrawInstrumentsEnum.Pen;

  strokeWidth = 5;

  // External service responsible for drawing of different types of shapes
  drawFactoryService: DrawFactoryService;

  drawService: IDrawService | undefined;

  undoRedoService: UndoRedoService;

  constructor(drawFactoryService: DrawFactoryService, undoRedoService: UndoRedoService) {
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

    this.drawFactoryService = drawFactoryService;
    this.undoRedoService = undoRedoService;
  }

  initDrawService() {
    this.drawFactoryService?.initDrawerFactory(
      this.drawInstrument,
      this.context as CanvasRenderingContext2D,
    );
    this.drawService = this.drawFactoryService.createDrawService();
  }

  initUndoRedoService() {
    // TODO: using as is bad, better to refactor the code or implement check
    this.undoRedoService.initService(
      this.canvas as HTMLCanvasElement,
      this.context as CanvasRenderingContext2D,
    );
  }

  setDrawInstrument(instrumentIndex: DrawInstrumentsEnum) {
    if (this.drawInstrument === instrumentIndex) {
      return;
    }
    this.drawInstrument = instrumentIndex;

    this.initDrawService();
    this.initUndoRedoService();
  }

  setStrokeWidth(width: number | number[]) {
    this.strokeWidth = width as number;
    if (!this.context) {
      return;
    }
    this.context.lineWidth = this.strokeWidth;
  }

  setCanvas(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    // this.context.scale(2, 2);
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = this.strokeWidth;

    this.initDrawService();
    this.initUndoRedoService();
  }

  startDrawing(event: React.MouseEvent) {
    this.undoRedoService.storeCanvas(this.canvas as HTMLCanvasElement);
    this.drawService?.startDrawing(event);
    this.isDrawing = true;
  }

  // TODO: find a way to fix this ?. checks that are everuwhere in the code...
  finishDrawing() {
    if (this.drawService?.finishDrawing) {
      this.drawService.finishDrawing();
    }
    this.isDrawing = false;
  }

  draw(event: React.MouseEvent) {
    if (!this.isDrawing || !this.drawService?.draw) {
      return;
    }
    this.drawService.draw(event);
  }

  clearCanvas() {
    if (!this.canvas || !this.context) {
      return;
    }

    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  undo() {
    this.undoRedoService.undo();
  }

  redo() {
    this.undoRedoService.redo();
  }
}

const drawFactoryService = new DrawFactoryService();
const undoRedoService = new UndoRedoService();

const drawStore = new DrawStore(drawFactoryService, undoRedoService);
export default drawStore;
