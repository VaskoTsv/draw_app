import { container } from 'tsyringe';

import {
  DrawFactoryService,
  DrawFactoryServiceSymbol,
  IDrawFactoryService,
} from '~/features/draw/services/draw.service';
import {
  IUndoRedoService,
  UndoRedoService,
  UndoRedoSymbol,
} from '~/features/undoRedo/undoRedo.service';
import {
  ClearCanvasService,
  ClearCanvasSymbol,
  IClearCanvasService,
} from '~/features/clearCanvas/clearCanvas.service';

export function setup() {
  container.register<IDrawFactoryService>(DrawFactoryServiceSymbol, DrawFactoryService);
  container.register<IUndoRedoService>(UndoRedoSymbol, UndoRedoService);
  container.register<IClearCanvasService>(ClearCanvasSymbol, ClearCanvasService);
}

setup();
export default container;
