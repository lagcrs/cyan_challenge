import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import Button from '../../../components/Button';



function HarvestForm() {
    const [code, setCode] = useState('');
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [mill, setMill] = useState('');

	const [mills, setMills] = useState({});

	useEffect(() => {
		async function loadMills(){
			const response = await api.get('/mills');
			setMills(response.data);
		};
		loadMills();
	}, []);

	var data = [];
	for (var i in mills) {
		data.push(mills[i]['name'])
	}

	const handleSubmit = async e => {
        e.preventDefault();
		const harvest = {
			code,
			start,
			end,
			mill
		}
		await api.post('/harvests', harvest);
		alert('Safra ' + code + ' cadastrado com sucesso!');
	}

	return (
		<form>
			<FormInput label="Código da Safra" type="text" name="code_harvest" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Data de Início" type="date" name="name_harvest" value={start}onChange={e => setStart(e.target.value)}/>
			<FormInput label="Data Final" type="date" name="name_harvest" value={end} onChange={e => setEnd(e.target.value)}/>
			<FormSelect label="Usina" onChange={e => setMill(e.target.value)} options={data}/>
			<Button onClick={handleSubmit}>Cadastrar Safra</Button>
		</form>
	)
}

export default HarvestForm;