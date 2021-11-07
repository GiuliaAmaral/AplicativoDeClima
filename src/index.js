import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ReactPWAInstallProvider from "react-pwa-install";
import App from './App';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.js';
import './global.css';


ReactDOM.render(
  <ReactPWAInstallProvider enableLogging>
    <App/>
  </ReactPWAInstallProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();