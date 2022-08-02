import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import context from './context/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <context.Provider value={{x:30,y:30,borderClr:true}} >
      <App />
    </context.Provider>
  </React.StrictMode>
);

