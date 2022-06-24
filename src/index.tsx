import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { UseSearchProvider } from './context/useSearch'

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';

import Theme from './styles/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <UseSearchProvider>
          <App />
        </UseSearchProvider>
      </ThemeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
