import React from 'react';

import styled from 'styled-components';

export default function Header () {

    return (
        <>
        <ContainerHeader>Header</ContainerHeader>
        </>
    )
}


const ContainerHeader = styled.header` 
    width: 370px;
    height: 60px;
    background: red; 
    font-size: 2rem;
`