import './App.css';

import { BrowserRouter } from "react-router-dom"
import Header from './components/header/Header'
import React from 'react';
import Router from './components/router/Router'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;