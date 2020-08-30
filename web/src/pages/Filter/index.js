import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Menu from '../../components/Menu';
import Button from '../../components/Button';
import FormSelect from '../../components/FormSelect';
import './styles.css';

function Filter() {
	const [show, setShow] = useState(false);
	
	const [mill, setMill] = useState("");
	const [harvestStart, setHarvestStart] = useState('');
	const [harvestEnd, setHarvestEnd] = useState('');
	const [harvestCode, setHarvestCode] = useState('');
	const [farmName, setFarmName] = useState('');
	const [farmCode, setFarmCode] = useState('');
	const [fieldCode, setFieldCode] = useState('');

	const [mills, setMills] = useState("");
	const [harvests, setHarvests] = useState({});
	const [farms, setFarms] = useState({});
	const [fields, setFields] = useState({});

	useEffect(() => {
		async function load(){
			const response_mill = await api.get('/mills');
			setMills(response_mill.data);

			const response_harvest = await api.get('/harvests');
			setHarvests(response_harvest.data);

			const response_farm = await api.get('/farms');
			setFarms(response_farm.data);

			const response_field = await api.get('/fields');
			setFields(response_field.data);
		};
		load();
	}, []);
	
	var millName = [];
	for (var i in mills) {
		millName.push(mills[i]['name'])
	}

	var harvestStartData = [];
	for (var i in harvests) {
		harvestStartData.push(harvests[i]['start'])
	}
	
	var harvestEndData = [];
	for (var i in harvests) {
		harvestEndData.push(harvests[i]['end'])
	}
	
	var harvestCodeData = [];
	for (var i in harvests) {
		harvestCodeData.push(harvests[i]['code'])
	}
	
	var farmNameData = [];
	for (var i in farms) {
		farmNameData.push(farms[i]['name'])
	}
	
	var farmCodeData = [];
	for (var i in farms) {
		farmCodeData.push(farms[i]['code'])
	}
	
	var fieldCodeData = [];
	for (var i in fields) {
		fieldCodeData.push(fields[i]['code'])
	}
	
	async function handleSearch(e){
		e.preventDefault();
		const response = await api.get('/filter', {
			params: {
				mill_name: mill,
				harvest_start: harvestStart,
				harvest_end: harvestEnd,
				harvest_code: harvestCode,
				farm_name: farmName,
				farm_code: farmCode,
				field_code: fieldCode
			},
		  });
	  
		  console.log(response.data);
	}
	
	return (
		<>
		<Menu to="/" text="Home" />
		<header className="header-filter">
				<form>
					<FormSelect label="Escolha uma usina abaixo para fazer a filtragem." onChange={e =>{ setMill(e.target.value) }} options={millName}/>
					<FormSelect label="Escolha data de início da Safra." onChange={e =>{ setHarvestStart(e.target.value) }} options={harvestStartData}/>
					<FormSelect label="Escolha data final da safra." onChange={e =>{ setHarvestEnd(e.target.value) }} options={harvestEndData}/>
					<FormSelect label="Escolha código da safra." onChange={e =>{ setHarvestCode(e.target.value) }} options={harvestCodeData}/>
					<FormSelect label="Escolha nome da fazenda." onChange={e =>{ setFarmName(e.target.value) }} options={farmNameData}/>
					<FormSelect label="Escolha código da fazenda." onChange={e =>{ setFarmCode(e.target.value) }} options={farmCodeData}/>
					<FormSelect label="Escolha código do talhão." onChange={e =>{ setFieldCode(e.target.value) }} options={fieldCodeData}/>
					<Button onClick={handleSearch}>Realizar Filtragem</Button>
				</form>
			</header>
		</>);
	}

export default Filter;