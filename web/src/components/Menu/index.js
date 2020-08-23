import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './styles.css'

// import { Container } from './styles';

function Menu(props) {
  return (
    <nav className="header">
        <div className="header-logo">
            Sugarcane
        </div>

        <div className="header-button">
            <Button
				as={ Link } to={props.to}
  			>{props.text}</Button>
        </div>
    </nav>
  );
}

export default Menu;