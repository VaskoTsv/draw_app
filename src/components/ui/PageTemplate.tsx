import React from 'react';

import TopPanel from '~/components/ui/TopPanel';
import Canvas from '~/components/ui/Canvas';

interface PageTemplateProps {}

const PageTemplate: React.FC<PageTemplateProps> = () => (
  <div className="h-screen flex flex-col gap-10 bg-slate-100">
    <TopPanel />
    <Canvas />
  </div>
);

export default PageTemplate;
