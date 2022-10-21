import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
    <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
  // </React.StrictMode>
);

reportWebVitals();
