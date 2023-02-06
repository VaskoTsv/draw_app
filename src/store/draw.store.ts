import { container } from 'tsyringe';
import { makeAutoObservable, observable } from 'mobx';

import { DrawInstrumentsEnum } from '~/features/draw/interfaces/drawInstruments.interface';
import { IUndoRedoService, UndoRedoService } from '~/features/undoRedo/services/undoRedo.service';
import {
  ClearCanvasService,
  IClearCanvasService,
} from '~/features/clearCanvas/services/clearCanvas.service';
import { DrawFactoryService, IDrawFactoryService } from '~/features/draw/services/draw.service';

class DrawStore {
  canvas: HTMLCanvasElement | null = null;

  context: CanvasRenderingContext2D | null = null;

  drawInstrument: DrawInstrumentsEnum = DrawInstrumentsEnum.Pen;

  strokeWidth: number = 5;

  // Injected services to handle the business logic
  drawFactory: IDrawFactoryService;

  undoRedoActionService: IUndoRedoService;

  clearCanvasService: IClearCanvasService;

  constructor() {
    makeAutoObservable(
      this,
      {
        canvas: observable,
        context: observable,
        drawInstrument: observable,
        strokeWidth: observable,
      },
      { autoBind: true },
    );

    this.drawFactory = container.resolve<IDrawFactoryService>(DrawFactoryService);
    this.undoRedoActionService = container.resolve<IUndoRedoService>(UndoRedoService);
    this.clearCanvasService = container.resolve<IClearCanvasService>(ClearCanvasService);
  }

  setCanvas(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = this.strokeWidth;

    this.drawFactory.initService(this.context, this.drawInstrument);
  }

  setDrawInstrument(instrumentIndex: DrawInstrumentsEnum) {
    if (this.drawInstrument === instrumentIndex || !this.context) {
      return;
    }
    this.drawInstrument = instrumentIndex;
    this.drawFactory.initService(this.context, this.drawInstrument);
  }

  setStrokeWidth(width: number) {
    if (!this.context) {
      return;
    }
    this.strokeWidth = width;
    this.context.lineWidth = this.strokeWidth;
  }

  // Drawing related service
  startDrawing(event: React.MouseEvent) {
    if (!this.canvas || !this.context) {
      return;
    }
    this.undoRedoActionService.storeCanvas(this.canvas);
    this.drawFactory.service?.startDrawing(event);
  }

  draw(event: React.MouseEvent) {
    if (this.drawFactory.service?.draw) {
      this.drawFactory.service.draw(event);
    }
  }

  finishDrawing() {
    if (this.drawFactory.service?.finishDrawing) {
      this.drawFactory.service.finishDrawing();
    }
  }

  // Undo/Redo related service
  undoAction() {
    if (!this.canvas || !this.context) {
      return;
    }
    this.undoRedoActionService.undo(this.canvas, this.context);
  }

  redoAction() {
    if (!this.canvas || !this.context) {
      return;
    }
    this.undoRedoActionService.redo(this.canvas, this.context);
  }

  // Clear canvas related service
  clearCanvas() {
    if (!this.canvas || !this.context) {
      return;
    }
    this.clearCanvasService.clear(this.canvas, this.context);
  }
}

const drawStore = new DrawStore();
export default drawStore;
