
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/LOGO.png'; 
import '../Header/Header.scss';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-buttons">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/propos" className="nav-link">A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
