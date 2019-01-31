import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item"><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
        <li className="navbar-item"><NavLink activeClassName="active" to="/questions">Question</NavLink></li>
        <li className="navbar-item"><NavLink activeClassName="active" to="/choices">Choice</NavLink></li>
      </ul>
    </nav>
  );
}
