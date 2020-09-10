import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Button from '../../components/Button';
import FormSelect from '../../components/FormSelect';
import './styles.css';


const FilterHarvest = (props) => {
	const [show, setShow] = useState(false);
	const [farms, setFarms] = useState({});
	const [harvestCode, setHarvestCode] = useState('');
	const options = props.data;

	var farmCodeData = [];
	for (var i in farms) {
	 	farmCodeData.push(farms[i]['code'])
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setShow(true);

		const response = await api.get('/filter-harvest', {
			params: {
				harvest_code: harvestCode
			},
		});
		setFarms(response.data);
	}

	return (
		<>
			<div id="content-filter-2">
				<form>
					<FormSelect label="Escolha um código de safra abaixo para fazer a filtragem." onChange={e =>{ setHarvestCode(e.target.value); } } options={options}/>
					<Button onClick={handleSubmit}>Filtrar Safra</Button>
				</form>
			</div>
			{ show ? <FilterFarm  data={farmCodeData}/>	: null}
		</>
	)
}

const FilterFarm = (props) => {
	const [show, setShow] = useState(false);
	const [farmCode, setFarmCode] = useState('');
	const [fields, setFields] = useState({});

	const options = props.data;

	var fieldCodeData = [];
	 for (var i in fields) {
	 	fieldCodeData.push(fields[i]['code'])
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setShow(true);
		const response = await api.get('/filter-farm', {
			params: {
				farm_code: farmCode
			},
		});
		setFields(response.data);
	}
	console.log(fields)

	return (
		<>
			<div id="content-filter-2">
				<form>
					<FormSelect label="Escolha uma fazenda abaixo para fazer a filtragem." onChange={e =>{ setFarmCode(e.target.value) } } options={options}/>
					<Button onClick={handleSubmit}>Filtrar Fazenda</Button>
				</form>
			</div>
			{ show ? <FilterField  data={fieldCodeData}/>	: null}
		</>
	)
}

const FilterField = (props) => {
	const [fieldCode, setFieldCode] = useState('');
	const [fieldsResults, setFieldsResults] = useState('');

	const options = props.data;

	const handleSubmit = async e => {
		e.preventDefault();
		const response = await api.get('/filter-field', {
			params: {
				field_code: fieldCode
			},
		});
		setFieldsResults(response.data);
	}
	console.log(fieldsResults)

	return (
		<>
			<div id="content-filter-2">
				<form>
					<FormSelect label="Escolha um código de campo abaixo para fazer a filtragem." onChange={e =>{ setFieldCode(e.target.value) } } options={options}/>
					<Button onClick={handleSubmit}>Filtrar Campo</Button>
				</form>
			</div>
		</>
	)
}

function Filter() {
	const [show, setShow] = useState(false);
	
	const [mill, setMill] = useState("");
	const [harvestStart, setHarvestStart] = useState('');
	const [harvestEnd, setHarvestEnd] = useState('');
	
	
	

	const [mills, setMills] = useState("");
	const [harvests, setHarvests] = useState({});
	
	

	useEffect(() => {
		async function load(){
			const response_mill = await api.get('/mills');
			setMills(response_mill.data);
		};
		load();
	}, []);

	

	
	
	var millName = [];
	for (var i in mills) {
		millName.push(mills[i]['name'])
	}
	
	var harvestCodeData = [];
	for (var i in harvests) {
		harvestCodeData.push(harvests[i]['code'])
	}



	var harvestStartData = [];
	for (var i in harvests) {
		harvestStartData.push(harvests[i]['start'])
	}
	
	var harvestEndData = [];
	for (var i in harvests) {
		harvestEndData.push(harvests[i]['end'])
	}
	
	
	// var farmNameData = [];
	// for (var i in farms) {
	// 	farmNameData.push(farms[i]['name'])
	// }
	
	// var farmCodeData = [];
	// for (var i in farms) {
	// 	farmCodeData.push(farms[i]['code'])
	// }
	
	// var fieldCodeData = [];
	// for (var i in fields) {
	// 	fieldCodeData.push(fields[i]['code'])
	//}

	const handleSubmit = async e => {
		e.preventDefault();
		setShow(true)
		const response = await api.get('/filter-mill', {
			params: {
				mill_name: mill
			},
		});
		setHarvests(response.data);
	}

	return (
		<>
			<Menu to="/" text="Home" />
			<header className="header-filter">
				<div className="container">
					<div id="content-filter">
						<form >
							<FormSelect label="Escolha uma usina abaixo para fazer a filtragem." onChange={e =>{ setMill(e.target.value); } } options={millName}/>
							<Button onClick={handleSubmit} className="click">Filtrar Usina</Button>
						</form>
						{ show ? <FilterHarvest  data={harvestCodeData}/>	: null}
					</div>
				</div>
			</header>
		</>);
	}

export default Filter;