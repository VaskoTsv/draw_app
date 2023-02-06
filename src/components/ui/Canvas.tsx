import React, { useEffect, useRef } from 'react';

import { observer } from 'mobx-react-lite';
import appStore from '~/store';
import { IMessageService, MessageServiceSymbol } from '~/lib/message.service';
import { useInjection } from '~/lib/ioc/useInjection';

interface CanvasProps {}

const Canvas: React.FC<CanvasProps> = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const messageService = useInjection<IMessageService>(MessageServiceSymbol);
  console.log('1', messageService.testMessage);

  useEffect(() => {
    appStore.drawStore.setCanvas(canvasRef.current as HTMLCanvasElement);
    messageService.setTestMessage('updated test message');
  }, []);

  useEffect(() => {
    console.log('2', messageService.testMessage);
  }, [messageService.testMessage]);

  return (
    <div className="flex items-center justify-center">
      <canvas
        className="h-full w-full bg-white shadow-md"
        ref={canvasRef}
        onMouseDown={appStore.drawStore.startDrawing}
        onMouseUp={appStore.drawStore.finishDrawing}
        onMouseMove={appStore.drawStore.draw}
      />
    </div>
  );
});

export default Canvas;
