import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="questions">Question</Link></li>
        <li className="navbar-item"><Link to="choices">Choice</Link></li>
      </ul>
    </nav>
  );
}
