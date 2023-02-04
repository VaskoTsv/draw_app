import React, { useEffect, useRef } from 'react';

import { observer } from 'mobx-react-lite';
import appStore from '~/store';

interface CanvasProps {}

const Canvas: React.FC<CanvasProps> = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    appStore.drawStore.setCanvas(canvasRef.current as HTMLCanvasElement);
  }, []);

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
