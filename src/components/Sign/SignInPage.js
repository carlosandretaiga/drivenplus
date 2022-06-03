import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
//import axios from 'axios';

//import { useContext } from "react";
//import UserContext from './contexts/UserContext';

import logoImg from '../../assets/images/logo.svg'

import styled from 'styled-components';
import Container from '../../shared/Container';
import Button from '../../shared/Button';


export default function SignInPage () {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Logo><img src={logoImg} alt="logo" /></Logo>
            
            <ContainerLogin>
            <FormLogin>

                <InputLogin
                placeholder='E-mail'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete='on'
                />

                <InputLogin
                placeholder='Senha'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete='on'
                />

                <Button>ENTRAR</Button>
               
        
            </FormLogin>
            <Link to='/sign-up'>
            <Span>Não tem uma conta? Cadastre-se</Span>
            </Link>
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
        height: 41px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding: 0 1.5rem;
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


const FormLogin = styled.form`
margin: 0 auto; 
    display: flex;
    flex-direction: column;
 

`


const Logo = styled.nav` 
    margin: 0 auto; 
    margin-top: 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 299px;
    height: 49px;
    left: 38px;
    top: 134px;
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
    