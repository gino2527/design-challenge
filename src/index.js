import React from 'react';
import ReactDOM from 'react-dom/client';

// own components
import App from './App';

// stylesheets
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
