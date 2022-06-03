

import styled from 'styled-components';

export default function Button ({children}) {

    return (
        <ContainerButton>{children}</ContainerButton>
    )
}

const ContainerButton = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    width: 298px;
    height: 52px;

    background: var(--pink-medium);
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: var(--white);
`