import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
//import axios from 'axios';

//import { useContext } from "react";
//import UserContext from './contexts/UserContext';

import logoImg from '../../assets/images/home-plus.svg'
import namePlusImg from '../../assets/images/name-driven-plus.svg'

import styled from 'styled-components';
import Container from '../../shared/Container';
import Button from '../../shared/Button';


export default function SubscriptionsPlan () {

    const [cardName, setCardName] = useState(''); 
    const [cardDigits, setCardDigits] = useState('');

    return (
        <Container>
            <Logo>
            <ImgSymbol src={logoImg} alt="símbolo" />
            <ImgName src={namePlusImg} alt="Driven Plus" />
            </Logo>
            
            <ContainerLogin>

            <FormLogin>

                <InputLogin
                placeholder='Nome impresso no cartão'
                type='text'
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
                autoComplete='on'
                />

                <InputLogin
                placeholder='Digitos do cartão'
                type='password'
                value={cardDigits}
                onChange={(e) => setCardDigits(e.target.value)}
                required
                autoComplete='on'
                />

                <ContainerInput>
                    <InputPlan
                    placeholder='Código de segurança'
                    type='password'
                    value={cardDigits}
                    //onChange={(e) => setCardDigits(e.target.value)}
                    required
                    autoComplete='on'
                     />

                    <InputPlan
                    placeholder='Validade'
                    type='password'
                    value={cardDigits}
                    //onChange={(e) => setCardDigits(e.target.value)}
                    required
                    autoComplete='on'
                     />
                </ContainerInput>

                <Button>ASSINAR</Button>
               
            </FormLogin>
            </ContainerLogin>
                
        </Container>
    )
}

const ContainerLogin = styled.div`
    margin: 0 auto; 
`

const InputLogin = styled.input`

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px; 
        width: 303px;
        height: 52px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding-left: 0.7rem;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 8px;
        
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-medium);
    }

    & + input {
        margin-top: 1rem; 
    }

`
const ContainerInput = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

`

const InputPlan = styled.input`

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem; 
        width: 145px;
        height: 52px;
        padding-left: 0.7rem;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 8px;
        
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-medium);
    }

`


const FormLogin = styled.form`
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
 

`


const Logo = styled.nav` 
    margin: 0 auto; 
    margin-top: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        padding-bottom: 0.4rem;
    }
`

const ImgSymbol = styled.img`
width: 139.38px;
height: 95.13px;

`

const ImgName = styled.img`
width: 164.38px;
height: 38px;
`

const Span = styled.div`
    padding-top: 10px;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration-line: underline;
    color: var(--white);
`
    