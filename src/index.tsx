import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/App';
import './styles/normalize.css';
import './styles/common.scss';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)