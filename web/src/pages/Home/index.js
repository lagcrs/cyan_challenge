import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

import headerImg from '../../assets/images/header.png';
import './styles.css'

function Home() {
  return (
    <>
    	<Menu/>
		<header id="page-landing">
			<div id="page-landing-content" >
				<div className="logo-container">
					<h2>Plataforma de controle de usinas de cana-de-açucar</h2>
					<p>Ajudando agricultores a possuírem um melhor controle de suas produções.</p>
					<div className="button-container">
						<Link to="/create">
							Cadastrar Usina
						</Link>
					</div>
				</div>

				<img src={headerImg} alt="Plataforma Sugarcane" className="header-image"/>
			</div>
		</header>
    </>
  );
}

export default Home;