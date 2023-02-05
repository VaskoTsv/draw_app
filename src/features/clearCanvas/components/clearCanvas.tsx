import React from 'react';

import { observer } from 'mobx-react-lite';
import { Trash2 as Trash2Icon } from 'react-feather';
import appStore from '~/store';

const ClearCanvas: React.FC = observer(() => (
  <span
    className="flex items-center max-h-8 m-2 p-3 bg-white hover:bg-gray-100 cursor-pointer"
    onClick={appStore.drawStore.clearCanvas}
  >
    <Trash2Icon />
  </span>
));

export default ClearCanvas;
