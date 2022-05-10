import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function soma(a,b) {
  return ("a soma de A + B é   " + (a+b))
}

function primeiroJSX() {
  return (
    <div className="teste">
      Luiz Vantuir - Introdução ao ReactJs
    <h3>{soma(10,11)}</h3></div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {primeiroJSX()}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
