import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './containers/Question';
import Header from './components/Header';
import './App.css';

const App = () => (
  <div className="container">
    <Router>
      <div>
        <Header />
        <Routers />
      </div>
    </Router>
  </div>
);

export default App;
