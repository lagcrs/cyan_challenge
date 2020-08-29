import React, { useState } from 'react';

import api from '../../../services/api';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Button';

function MillForm() {
    const [name, setName] = useState('');

	const handleSubmit = async e => {
        e.preventDefault();
		const mill = {
			name
		}
		await api.post('/mills', mill);
		alert('Usina ' + name + ' cadastrado com sucesso!');
	}

	return (
		<form >
			<FormInput label="Nome da Usina" type="text" name="mill" value={name} onChange={e => setName(e.target.value)}/>
			<Button onClick={handleSubmit}>Cadastrar Usina</Button>
		</form>
	)
}

export default MillForm;