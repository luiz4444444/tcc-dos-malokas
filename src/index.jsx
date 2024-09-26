import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegação from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegação/>
  </React.StrictMode>
);