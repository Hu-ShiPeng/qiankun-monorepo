import React from 'react';
import logo from './logo.svg';
import './App.css';
import {add} from '@test/utils'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        {add(1,2)}
      </div>
    </div>
  );
}

export default App;
