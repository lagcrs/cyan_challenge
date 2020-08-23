import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import Button from '../../components/Button';

import headerImg from '../../assets/images/header.png';
import './styles.css'

function Home() {
  return (
    <>
    	<Menu to="/filter" text="Filtrar"/>
		<header id="page-landing">
			<div id="page-landing-content" >
				<div className="logo-container">
					<h2>Plataforma de controle de usinas de cana-de-açucar</h2>
					<p>Ajudando agricultores a possuírem um melhor controle de suas produções.</p>
					<div className="button-container">
						<Button
							as={ Link } to="/create"
							background="#75BF44"
							hover="#68ab3b"
						>Cadastrar Usina</Button>
					</div>
				</div>

				<img src={headerImg} alt="Plataforma Sugarcane" className="header-image"/>
			</div>
		</header>
    </>
  );
}

export default Home;