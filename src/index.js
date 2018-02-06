import React from 'react';
import { render } from 'react-dom';
import './scss/base.scss'
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';



render(
  <div>
    <NavBar />
    <Home />
  </div>,
  document.getElementById('app')
);
