import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain='dev-dinmf1xz08aa6zto.us.auth0.com'clientId='r3vHZPonCIzmWabBuSks8IDjWf6o4hw1' redirectUri= {window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

