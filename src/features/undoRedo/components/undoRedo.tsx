import React from 'react';

import {
  CornerDownLeft as CornerDownLeftIcon,
  CornerDownRight as CornerDownRightIcon,
} from 'react-feather';

interface UndoRedoActionsProps {}

const UndoRedoActions: React.FC<UndoRedoActionsProps> = () => (
  <>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownLeftIcon />
    </span>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownRightIcon />
    </span>
  </>
);

export default UndoRedoActions;
