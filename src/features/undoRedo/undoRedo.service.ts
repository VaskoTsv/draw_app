import { injectable } from 'tsyringe';

interface IUndoRedoService {
  undoStack: string[];
  redoStack: string[];
  storeCanvas: (canvas: HTMLCanvasElement) => void;
  undo: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => void;
  redo: (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => void;
}

const UndoRedoSymbol: symbol = Symbol('UndoRedoService');

@injectable()
class UndoRedoService implements IUndoRedoService {
  undoStack: string[] = [];

  redoStack: string[] = [];

  storeCanvas(canvas: HTMLCanvasElement) {
    this.undoStack.push(canvas.toDataURL());
    this.redoStack = [];
  }

  undo(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    if (!this.undoStack.length) {
      return;
    }

    this.redoStack.push(canvas.toDataURL());
    const restoreState = this.undoStack.pop();

    const img = new Image();
    img.src = restoreState as string;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };
  }

  redo(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    if (!this.redoStack.length) {
      return;
    }

    this.undoStack.push(canvas.toDataURL());
    const restoreState = this.redoStack.pop();

    const img = new Image();
    img.src = restoreState as string;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    };
  }
}

export { UndoRedoService, UndoRedoSymbol, IUndoRedoService };
