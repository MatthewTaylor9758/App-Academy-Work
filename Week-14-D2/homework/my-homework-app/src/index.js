import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RandomQuote from './RandomQuote';
import AlertButton from './AlertButton';
import NoDefaultSubmitForm from './NoDefaultSubmitForm';
import ContactUs from './ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <RandomQuote />
    <AlertButton />
    <NoDefaultSubmitForm />
    <ContactUs />
  </React.StrictMode>,
  document.getElementById('root')
);
