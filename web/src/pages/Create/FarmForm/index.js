import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import Button from '../../../components/Button';

function FarmForm() {
    const [code, setCode] = useState('');
	const [name, setName] = useState('');
	const [harvest, setHarvest] = useState('');

	const [harvests, setHarvests] = useState({});

	useEffect(() => {
		async function loadHarvests(){
			const response = await api.get('/harvests');
			setHarvests(response.data);
		};
		loadHarvests();
    }, []);

	var data = [];
	for (var i in harvests) {
		data.push(harvests[i]['code'])
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
		const farm = {
			code,
			name,
			harvest
		}
		await api.post('/farms', farm);
		alert('Fazenda ' + code + ' cadastrado com sucesso!');
	}

	return (
		<form>
			<FormInput label="Código da Fazenda" type="text" name="code_harvest" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Nome da Fazenda" type="text" name="name_harvest" value={name} onChange={e => setName(e.target.value)}/>
			<FormSelect label="Safra" onChange={e => setHarvest(e.target.value)} options={data}/>
			<Button onClick={handleSubmit}>Cadastrar Fazenda</Button>
		</form>
	)
}

export default FarmForm;