import React from 'react';

import {
  CornerDownLeft as CornerDownLeftIcon,
  CornerDownRight as CornerDownRightIcon,
  Trash2 as Trash2Icon,
} from 'react-feather';

interface UndoRedoActionsProps {}

const UndoRedoActions: React.FC<UndoRedoActionsProps> = () => (
  <div className="w-40 bg-gray-200 shadow-md flex flex-row flex-wrap justify-center items-center	gap-3">
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownLeftIcon />
    </span>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownRightIcon />
    </span>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <Trash2Icon />
    </span>
  </div>
);

export default UndoRedoActions;
