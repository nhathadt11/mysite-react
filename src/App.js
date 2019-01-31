import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="container">
    <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  </div>
);

export default App;
