import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StrictMode from 'react'
import reducer, { initialState } from "./ContextAPI/reducer";
import { StateProvider } from "./ContextAPI/StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);

