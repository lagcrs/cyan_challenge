import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

// import { Container } from './styles';

function Menu() {
  return (
    <nav className="header">
        <div className="header-logo">
            Sugarcane
        </div>

        <div className="header-button">
            <Link to="/filter">
                Filtrar
            </Link>
        </div>
    </nav>
  );
}

export default Menu;