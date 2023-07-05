import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h3>
          <Link to='/app1'>
            app1
          </Link>
        </h3>
        <h3>
          <Link to='/app2'>
            app2
          </Link>
        </h3>
      </BrowserRouter>
      <div id='container'></div>
    </div>
  );
}

export default App;
