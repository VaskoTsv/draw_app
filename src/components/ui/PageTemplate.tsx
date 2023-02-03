import React from 'react';

import ActionPanel from '~/components/ui/ActionPanel';
import Canvas from '~/components/ui/Canvas';

interface PageTemplateProps {}

const PageTemplate: React.FC<PageTemplateProps> = () => (
  <div className="h-screen flex flex-col gap-10 bg-slate-100">
    <ActionPanel />
    <Canvas />
  </div>
);

export default PageTemplate;
