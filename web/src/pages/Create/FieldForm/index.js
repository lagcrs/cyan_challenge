import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';
import Button from '../../../components/Button';

function FieldForm() {
    const [code, setCode] = useState('');
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
    const [farm, setFarm] = useState('');
    
    const [farms, setFarms] = useState({});

    const coordinates = [latitude, longitude];

	useEffect(() => {
		async function loadFarms(){
			const response = await api.get('/farms');
			setFarms(response.data);
		};
		loadFarms();
    }, []);

	var data = [];
	for (var i in farms) {
		data.push(farms[i]['name'])
    }

    console.log(coordinates)
    
    const handleSubmit = async e => {
        e.preventDefault();
		const field = {
			code,
			coordinates,
            farm
		}
		await api.post('/fields', field);
		alert('Talhão ' + code + ' cadastrado com sucesso!');
	}


	return (
		<form>
			<FormInput label="Código do Talhão" type="text" name="code_field" value={code} onChange={e => setCode(e.target.value)}/>
			<FormInput label="Latitude" type="number" name="Latitude" value={latitude} onChange={e => setLatitude(e.target.value)}/>
			<FormInput label="Longitude" type="number" name="longitude" value={longitude} onChange={e => setLongitude(e.target.value)}/>
            <FormSelect label="Fazenda" onChange={e => setFarm(e.target.value)} options={data}/>
			<Button onClick={handleSubmit}>Cadastrar Talhão</Button>
		</form>
	)
}

export default FieldForm;