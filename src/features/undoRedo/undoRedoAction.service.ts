class UndoRedoActionService {
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
    if (!this.undoStack.length || !this.canvas) {
      return;
    }

    this.redoStack.push(this.canvas.toDataURL());
    const restoreState = this.undoStack.pop();

    const img = new Image();
    img.src = restoreState as string;
    img.onload = () => {
      if (!this.canvas || !this.context) {
        return;
      }
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, 0, 0);
    };
  }

  redo() {
    if (!this.redoStack.length || !this.canvas) {
      return;
    }

    this.undoStack.push(this.canvas.toDataURL());
    const restoreState = this.redoStack.pop();

    const img = new Image();
    img.src = restoreState as string;
    img.onload = () => {
      if (!this.canvas || !this.context) {
        return;
      }
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(img, 0, 0);
    };
  }
}

export default UndoRedoActionService;
