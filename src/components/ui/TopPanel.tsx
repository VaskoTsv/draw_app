import React from 'react';

import { observer } from 'mobx-react-lite';

import UndoRedoButtons from '~/features/undoRedo/undoRedoButtons';
import ClearCanvasButton from '~/features/clearCanvas/clearCanvasButton';
import DrawInstruments from '~/features/draw/components/drawInstruments/drawInstrumentsList';
import DrawSliders from '~/features/draw/components/drawSliders';

const TopPanel: React.FC = observer(() => (
  <header className="h-60 p-10 flex flex-row gap-3 bg-white shadow-md">
    <div className="h-40 w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      <DrawInstruments />
    </div>
    <div className="w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      <DrawSliders />
    </div>
    <div className="w-40 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center items-center gap-3">
      <UndoRedoButtons />
      <ClearCanvasButton />
    </div>
  </header>
));

export default TopPanel;
