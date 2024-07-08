// src/App.tsx
import React from 'react';
import AppRouter from './Router';
import { BrowserSolidLdoProvider } from '@ldo/solid-react';

const App = () => {
  return (
    <div>
       <BrowserSolidLdoProvider>
       <AppRouter />
       </BrowserSolidLdoProvider>
    </div>
  );
};

export default App;