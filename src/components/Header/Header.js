import React from 'react';

import styled from 'styled-components';

export default function Header ({children}) {

    return (
        <>
        <ContainerHeader>{children}</ContainerHeader>
        </>
    )
}


const ContainerHeader = styled.header` 
    margin: 0 auto; 
    margin-top: 32px;
    margin-left: 5px;
    margin-right: 40px;
    margin-bottom: 30px;
    width: 270px;
    height: 60px;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

`