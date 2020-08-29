import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    
`;

const Select = styled.select`
    width: 100%;
    height: 4rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font-weight: 300;
`;

function FormSelect({label, onChange, options}) {
    return (
        <div className="input-content">
            <Label>{label}</Label>
            <Select onChange={onChange}>
                <option value="" disabled selected hidden>Selecione uma opção</option>
                {
                    options.map(op => <option key={op}>{op}</option>)
                }
            </Select>
        </div>
    )
};

export default FormSelect;