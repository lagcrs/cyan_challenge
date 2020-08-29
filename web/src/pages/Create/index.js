import React, { useState } from 'react';

import Menu from '../../components/Menu';

import MillForm from './MillForm';
import HarvestForm from './HarvestForm';
import FarmForm from './FarmForm';
import FieldForm from './FieldForm';

import FormSelect from '../../components/FormSelect';

import './styles.css';

const RegistrationForm = (props) => {
	const option = props.option;
	if (option === 'Usinas') {
		return (
			<div id="content-create">
				<h3>Registro de {option}</h3>
				<MillForm/>
			</div>
		)
	}

	if (option === 'Safras') {
		return (
			<div id="content-create">
				<h3>Registro de {option}</h3>
				<HarvestForm/>
			</div>
		)
	}

	if (option === 'Fazendas') {
		return (
			<div id="content-create">
				<h3>Registro de {option}</h3>
				<FarmForm/>
			</div>
		)
	}

	if (option === 'Talhões') {
		return (
			<div id="content-create">
				<h3>Registro de {option}</h3>
				<FieldForm/>
			</div>
		)
	}
};

function Create() {
	const [option, setOption] = useState("");
	const [show, setShow] = useState(false);

	const options = ['Usinas', 'Safras', 'Fazendas', 'Talhões'];

	return (
		<>
			<Menu to="/" text="Home" />
			<header className="header-create">
				<form>
					<FormSelect label="Escolha uma opção abaixo para fazer o cadastro." onChange={e =>{ setOption(e.target.value); setShow(true); }} options={options}/>
				</form>
			</header>
			<main>
				{ show ? <RegistrationForm  option={option} /> : null}
			</main>
		</>
	)
}

export default Create;