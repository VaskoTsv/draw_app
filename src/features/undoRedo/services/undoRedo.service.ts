/* eslint-disable */
// @ts-nocheck
// TODO: fix this later and refactor the code
class UndoRedoService {
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  undoStack: string[];
  redoStack: string[];

  constructor() {
    this.canvas = null;
    this.context = null;
    this.undoStack = [];
    this.redoStack = [];
  }

  initService(_canvas: HTMLCanvasElement, _context: CanvasRenderingContext2D) {
    this.canvas = _canvas;
    this.context = _context;
  }

  storeCanvas(canvas: HTMLCanvasElement) {
    this.undoStack.push(canvas.toDataURL());
    this.redoStack = [];
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.canvas.toDataURL());
      var restoreState = this.undoStack.pop();
      var img = new Image();
      img.src = restoreState;
      img.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(img, 0, 0);
      };
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.canvas.toDataURL());
      var restoreState = this.redoStack.pop();
      var img = new Image();
      img.src = restoreState;
      img.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(img, 0, 0);
      };
    }
  }
}

export default UndoRedoService;
