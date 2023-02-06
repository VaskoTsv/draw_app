import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import PageTemplate from '~/components/ui/PageTemplate';
import container from './lib/ioc/ioc';
import { DIContainerContext } from './lib/ioc/useInjection';

const App: React.FC = () => (
    <div className="App">
      <DIContainerContext.Provider value={container}>
        <PageTemplate />
      </DIContainerContext.Provider>
    </div>
  );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
