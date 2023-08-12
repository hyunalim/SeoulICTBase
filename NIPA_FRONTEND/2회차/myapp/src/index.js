import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App06'; // const APP = require("/APP") 과 같은 의미 
import reportWebVitals from './reportWebVitals';

//react 라이브러리 제공하는 createRoot를통해 root div를 읽어드림 (index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
//root에 렌더링 하는 것 
//APP: 가상DOM, 실제 요소의 시작점, 화면에 보여지는 모든 UI
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
