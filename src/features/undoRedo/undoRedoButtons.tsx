import React from 'react';

import { observer } from 'mobx-react-lite';
import {
  CornerDownLeft as CornerDownLeftIcon,
  CornerDownRight as CornerDownRightIcon,
} from 'react-feather';
import appStore from '~/store';

const UndoRedoButtons: React.FC = observer(() => (
  <>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownLeftIcon onClick={appStore.drawStore.undoAction} />
    </span>
    <span className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer">
      <CornerDownRightIcon onClick={appStore.drawStore.redoAction} />
    </span>
  </>
));

export default UndoRedoButtons;
