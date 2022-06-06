import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

//import { useContext } from "react";
//import UserContext from './contexts/UserContext';
import { ThreeDots } from "react-loader-spinner";


import styled from 'styled-components';
import Container from '../../shared/Container';
import Button from '../../shared/Button';


export default function SignInPage () {

    const navigate = useNavigate(); 

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    //Function to verification identification to personal information 
    function formataCPF(cpfTeste) {
        cpfTeste = cpfTeste.replace(/[^\d]/g, ""); 

        return cpfTeste.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }


    const [pageLoaded, setPageLoaded] = useState(true);
    function fillLoading() {
        return !pageLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />

        ) : (
            "CADASTRAR"
        ); 
    }

    function disableLoading() {
        return !pageLoaded ? "disabled" : ""; 
    }

    function signUpForm(event) {
        event.preventDefault(); 
        setPageLoaded(false); 

        setCpf(formataCPF(cpf)); //colocando o CPF no formato: 000.000.000-00


        const body = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }

        const SIGN_UP_API = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up'; 

        const promise = axios.post(SIGN_UP_API, body); 
        promise
            .then(response => {
                navigate('/'); 
                console.log(response.data); 
        })
            .catch(error => {
                alert('Cadastro inválido! Por favor verifique seus dados');
                setPageLoaded(true); 
            })
    }

 

return (
    <Container>  
    <ContainerLogin>
        <FormLogin onSubmit={(event) =>
        signUpForm(event)}>

        <InputLogin
        placeholder='Nome'
        type='text'
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required maxlength="45"
        autoComplete='on'
        />

        <InputLogin
        placeholder='CPF'
        type='text'
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        required maxlength="11"
        pattern="[0-9]{11}"
        autoComplete='on'
        />

        <InputLogin
        placeholder='E-mail'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required maxlength="40"
        autoComplete='on'
        />

        <InputLogin
        placeholder='Senha'
        type='password'
        value={password}    
        onChange={(e) => setPassword(e.target.value)} 
        required maxlength="16"
        autoComplete='on'
        />

        <Button type='submit'>
            {fillLoading()}
        </Button>
                
    </FormLogin>
    <Link to='/'>
    <Span>Já possuí uma conta? Entre</Span>
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
