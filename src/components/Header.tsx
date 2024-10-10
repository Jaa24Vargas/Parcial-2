import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Celestial Bodies</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            
          </li>
          {}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
