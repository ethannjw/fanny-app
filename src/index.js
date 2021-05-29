import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './routes'

ReactDOM.render(
  <BrowserRouter>

      <Router />

  </BrowserRouter>,
  document.getElementById('root')
);
