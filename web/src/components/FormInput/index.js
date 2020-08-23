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

const Input = styled.input`
    width: 100%;
    height: 4rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    color: var( --color-text-title);
    padding: 0 1.6rem;
    font-weight: 300;

    &:focus {
    border-bottom-color: var(--color-primary);
  }
`;

function FormInput({ label, type, name, value, onChange }) {
    return (
        <div className="input-content">
            <Label>{label}</Label>
            <Input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />  
        </div>
    )
};

export default FormInput;
