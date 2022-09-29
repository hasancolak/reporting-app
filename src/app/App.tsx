import React from 'react';
import { Reports } from '../components/Reports/Reports';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Reports
      </header>
      <div className="content">
        <Reports/>
      </div>
    </div>
  );
};

export default App;
