import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { GlobalProvider } from './context/GlobalState'; // import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>   {/* Wrap App with GlobalProvider */}
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
