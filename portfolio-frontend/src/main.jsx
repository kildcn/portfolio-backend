import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// Set the base URL for all Axios requests
axios.defaults.baseURL = import.meta.env.DEV
  ? 'http://localhost:8000'
  : import.meta.env.VITE_API_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
