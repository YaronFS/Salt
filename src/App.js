import React from 'react';
import './App.css';

import Main from './pages/Main';
import { HttpMessagesContext } from './shared/contexts/http-messages-context';
import externalData from './assets/fe_data.json';

function App() {
  const data = externalData;

  return (
    <HttpMessagesContext.Provider value={data}>
      <Main />
    </HttpMessagesContext.Provider>
  );
}

export default App;
