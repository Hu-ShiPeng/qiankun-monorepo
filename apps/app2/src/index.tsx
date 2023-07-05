// 入口文件 index.tsx
//引入新增的 public-path 文件
import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let root: ReactDOM.Root;

interface Window {
  __POWERED_BY_QIANKUN__: boolean
}

declare let window: Window
const render = (props:Record<string, any>)=>{
  const {container} = props
  root = ReactDOM.createRoot(container ?  container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    <BrowserRouter
      // 对两种不同的环境分别给出不同的基础路径
      basename={window.__POWERED_BY_QIANKUN__ ? '/app2' : '/'}
    >
      <App />
    </BrowserRouter>
  )
}
// 独立运行，直接调用 createRoot函数 render
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

// lifecycle => 初始化
export async function bootstrap(props: Record<string, any>) {
  console.log('bootstrap', props)
  console.log(props)
}

// lifecycle => 挂载
export async function mount(props: Record<string, any>) {
  console.log('mount', props)
  render(props)
}

// lifecycle => 卸载
export async function unmount(props: Record<string, any>) {
  console.log('unmount', props)
  root.unmount();
}


reportWebVitals();
