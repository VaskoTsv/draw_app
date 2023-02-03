import React from 'react';

import ActionPanel from '~/components/ui/ActionPanel';

interface PageTemplateProps {}

const PageTemplate: React.FC<PageTemplateProps> = () => (
  <div className="h-screen flex flex-col bg-slate-100">
    <ActionPanel />
  </div>
);

export default PageTemplate;
