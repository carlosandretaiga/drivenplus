import React from 'react';

import styled from 'styled-components';

export default function Footer ({children}) {

    return (
        <>
        <ContainerFooter>{children}</ContainerFooter>
        </>
    )
}


const ContainerFooter = styled.footer` 
    width: 375px;
    height: 160px;
    display: flex;
    margin: 0 auto; 
    flex-direction: column;
    //justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 12px;
    left: 0;
    right: 0;
    z-index: 2;
`