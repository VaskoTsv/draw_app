import { makeAutoObservable, observable } from 'mobx';

import { DrawFactoryService } from '~/features/draw';
import { DrawInstrumentsEnum } from '~/features/draw/interfaces/drawInstruments.interface';
import UndoRedoActionService from '~/features/undoRedo/services/undoRedoAction.service';

class DrawStore {
  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  isDrawing: boolean = false;

  drawInstrument: DrawInstrumentsEnum = DrawInstrumentsEnum.Pen;

  strokeWidth: number = 5;

  drawFactory: DrawFactoryService;

  undoRedoActionService: UndoRedoActionService;

  constructor(drawFactoryService: DrawFactoryService, undoRedoService: UndoRedoActionService) {
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

    this.drawFactory = drawFactoryService;
    this.undoRedoActionService = undoRedoService;
  }

  initDrawFactory() {
    if (!this.context) {
      return;
    }
    this.drawFactory.initDrawerFactory(this.drawInstrument, this.context);
  }

  initUndoRedoService() {
    if (!this.canvas || !this.context) {
      return;
    }
    this.undoRedoActionService.initService(this.canvas, this.context);
  }

  setDrawInstrument(instrumentIndex: DrawInstrumentsEnum) {
    if (this.drawInstrument === instrumentIndex) {
      return;
    }
    this.drawInstrument = instrumentIndex;
    this.initDrawFactory();
    this.initUndoRedoService();
  }

  setStrokeWidth(width: number) {
    if (!this.context) {
      return;
    }
    this.strokeWidth = width;
    this.context.lineWidth = this.strokeWidth;
  }

  setCanvas(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = this.strokeWidth;

    this.initDrawFactory();
    this.initUndoRedoService();
  }

  startDrawing(event: React.MouseEvent) {
    const { drawService } = this.drawFactory;

    if (!this.canvas || !drawService) {
      return;
    }

    this.undoRedoActionService.storeCanvas(this.canvas);
    drawService.startDrawing(event);
    this.isDrawing = true;
  }

  finishDrawing() {
    const { drawService } = this.drawFactory;

    if (!drawService) {
      return;
    }

    drawService.finishDrawing();
    this.isDrawing = false;
  }

  draw(event: React.MouseEvent) {
    const { drawService } = this.drawFactory;

    if (!this.isDrawing || !drawService) {
      return;
    }

    drawService.draw(event);
  }

  clearCanvas() {
    if (!this.canvas || !this.context) {
      return;
    }
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  undo() {
    this.undoRedoActionService.undo();
  }

  redo() {
    this.undoRedoActionService.redo();
  }
}

// TODO: Introduce IOC and inject services wherever they are needed
const drawStore = new DrawStore(new DrawFactoryService(), new UndoRedoActionService());
export default drawStore;
