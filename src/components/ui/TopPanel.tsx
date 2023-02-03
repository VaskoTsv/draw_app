import React from 'react';

import { DrawInstruments, DrawSliders } from '~/features/draw/index';
import UndoRedoActions from '~/features/undoRedo/index';

interface TopPanelProps {}

const TopPanel: React.FC<TopPanelProps> = () => (
  <header className="h-60 p-10 flex flex-row gap-3 bg-white shadow-md">
    <DrawInstruments />
    <DrawSliders />
    <UndoRedoActions />
  </header>
);

export default TopPanel;
