import React from 'react';
import ReactDOM from 'react-dom/client'
import { hydrate, render } from 'react-dom'
import './index.css';
import 'flowbite';
//import App from './App';
import Home from 'components/pages/Home'
import reportWebVitals from './reportWebVitals'

const root = document.getElementById('root');
if(root.hasChildNodes()){
  hydrate(<Home />, root)
} else {
  render(<Home />, root)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
