import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {start,registerMicroApps,setDefaultMountApp} from 'qiankun'

// @ts-ignore
registerMicroApps(
  [
    {
      name:'app2',
      container:'#container',
      entry:'http://localhost:3001/',
      activeRule:'/app2'
    },
  ],
  {
    // @ts-ignore
    beforeLoad: (app) => {
      console.log('before load app.name====>>>>>', app)
    },
    // @ts-ignore
    afterMount:[(app)=>{
      console.log('afterMount', app)
    }]
    // beforeMount: [
    //   (app) => {
    //     console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    //   }
    // ],
    // afterMount: [
    //   (app) => {
    //     console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    //   }
    // ],
    // afterUnmount: [
    //   (app) => {
    //     console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    //   }
    // ]
  }
)
start({
  sandbox:{
    experimentalStyleIsolation:true
  }
})
setDefaultMountApp('/app2')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
