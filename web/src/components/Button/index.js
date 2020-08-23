import styled from 'styled-components';

const Button = styled.a`
    background: ${props => props.background ? props.background : '#4d4d4d'};
    padding: 1rem 2rem;
    border-radius: 10rem;
    text-decoration: none;
    color:  var(--color-text-base);
    cursor: pointer;
    transition: background-color 1s;
    &:hover {
        background: ${props => props.hover ? props.hover : '#333333'}
    }
`;

export default Button;