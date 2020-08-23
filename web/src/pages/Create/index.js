import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import FormInput from '../../components/FormInput';

import './styles.css';

const MillForm = () => {
	const [name, setName] = useState('');
	return <FormInput label="Nome da Usina" type="text" name="mill" value={name} onChange={e => setName(e.target.value)}/>
};

const HavestForm = () => {
	const [code, setCode] = useState('');
	const [dateStart, setDateStart] = useState('');
	const [dateEnd, setDateEnd] = useState('');
	const [mill, setMill] = useState('');

	return (
		<>
			<FormInput label="Código da Safra" type="text" name="code_harvest" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Data de Início" type="date" name="name_harvest" value={dateStart}onChange={e => setDateStart(e.target.value)}/>
			<FormInput label="Data Final" type="date" name="name_harvest" value={dateEnd} onChange={e => setDateEnd(e.target.value)}/>

		</>
	)
}

const FarmForm = () => {
	const [code, setCode] = useState('');
	const [name, setName] = useState('');
	const [harvest, setHarvest] = useState('');

	return (
		<>
			<FormInput label="Código da Fazenda" type="text" name="code_harvest" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Nome da Fazenda" type="text" name="name_harvest" value={name} onChange={e => setName(e.target.value)}/>

		</>
	)
}

const FieldForm = () => {
	const [code, setCode] = useState('');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [farm, setFarm] = useState('');

	console.log(latitude)

	return (
		<>
			<FormInput label="Código do Talhão" type="text" name="code_field" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Latitude" type="number" name="Latitude" value={latitude} onChange={e => setLatitude(e.target.value)}/>
			<FormInput label="Longitude" type="number" name="longitude" value={longitude} onChange={e => setLongitude(e.target.value)}/>

		</>
	)
}

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
				<HavestForm/>
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
					<label htmlFor="options">Escolha uma opção abaixo para fazer o cadastro.</label> <br/>
					<select id="options" onChange={e =>{ setOption(e.target.value); setShow(true); }}>
						<option value="" disabled selected hidden>Selecione uma opção</option>
						{
							options.map(op => <option key={op}>{op}</option>)
						}
					</select>

				</form>
			</header>
			<main>
				{ show ? <RegistrationForm  option={option} /> : null}
			</main>
		</>
	)
}

export default Create;