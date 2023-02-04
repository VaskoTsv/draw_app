import React from 'react';

import { observer } from 'mobx-react-lite';

import { Trash2 as Trash2Icon } from 'react-feather';
import appStore from '~/store';

import { DrawInstruments, DrawSliders } from '~/features/draw/index';
import UndoRedoActions from '~/features/undoRedo/index';

interface TopPanelProps {}

const TopPanel: React.FC<TopPanelProps> = observer(() => (
  <header className="h-60 p-10 flex flex-row gap-3 bg-white shadow-md">
    <div className="h-40 w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      <DrawInstruments />
    </div>
    <div className="w-60 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center gap-3">
      <DrawSliders />
    </div>
    <div className="w-40 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center items-center	gap-3">
      <UndoRedoActions />
      {/* TODO: move clear canvas to own feature or the draw feature later */}
      <span
        className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer"
        onClick={appStore.drawStore.clearCanvas}
      >
        <Trash2Icon />
      </span>
    </div>
  </header>
));

export default TopPanel;
