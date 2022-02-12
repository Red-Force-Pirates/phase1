import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import TemporaryDrawer from './components/Vault/Drawer';

ReactDOM.render(
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>,
    // <TemporaryDrawer />,
  document.getElementById('root')
);
