import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing CSS styles
import { Provider } from 'react-redux'; // Importing the Provider from react-redux
import store from './store.js'; // Importing the configured Redux store

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrapping the App component with the Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);
