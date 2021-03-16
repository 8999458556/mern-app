import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mern from "./Routes"
import Header from "./header"
import Maps from "./maps"

ReactDOM.render(
  <React.StrictMode>
    <Mern/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
