import React from 'react';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import { useContext } from "react";

import UserContext from '../contexts/UserContext';

import profileImg from '../../assets/images/profile.svg'

import styled from 'styled-components';
import Container from '../../shared/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';


export default function Home () {

    //const { userData } = useContext(UserContext);

    const navigate = useNavigate(); 
    
   // const [plans, setPlans] = useState([]); 

    const { name, token, plan } = useContext(UserContext);

    //const { dataMembership, setDataMembership } = useContext(UserContext);

    //const listOfBenefits = dataMembership.perks; 

    //console.log("No home:", dataMembership);

    //console.log(listOfBenefits);


    function deletePlan () {

        //const tokenUser = userData.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
        promise.then(() => {
            alert('Plano cancelado com sucesso!');
            navigate('/subscriptions');
        }); 
    }

    function chancePlan() {
        navigate('/subscriptions')
    }


    return Object.values(plan).length > 0 ? (
        <Container>
            <ContainerHome>
            <Header>
            <ImgSymbol src={plan.image} alt="logomarca do plano plus" /> 
            <ImgName src={profileImg} alt="profile" />
            </Header>

            <h2>Olá, {name}</h2>

            {plan.perks.map((benef, index) => <ButtonBenefits key={index}><a href={benef.link}>{benef.title}</a></ButtonBenefits>)}

            <Footer>
            <ButtonChange onClick={chancePlan}>Mudar plano</ButtonChange>
            <ButtonCancel onClick={deletePlan}>Cancelar plano</ButtonCancel>
            </Footer>
            </ContainerHome> 
        </Container>
    ) : <></>;
}

const ButtonChange = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
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

const ButtonCancel = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    width: 298px;
    height: 52px;

    background: #FF4747;
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

const ButtonBenefits = styled.button`
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

    a { 
        text-decoration: none;
        color: var(--white);
    }

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

const ContainerHome = styled.div`
    margin: 0 auto; 

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--white); 
    }
`

const ImgSymbol = styled.img`
width: 74.52px;
height: 50.87px;

`

const ImgName = styled.img`
`

