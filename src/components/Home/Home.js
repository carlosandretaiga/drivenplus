import React from 'react';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { useContext } from "react";

import { useEffect } from 'react';

import UserContext from '../contexts/UserContext';

import logoHomePlusImg from '../../assets/images/home-plus.svg'
import logoHomeGoldImg from '../../assets/images/home-gold.svg'
import logoHomePlatinumImg from '../../assets/images/home-platinum.svg'
import profileImg from '../../assets/images/profile.svg'

import styled from 'styled-components';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Home () {

    const {planId} = useParams(); 
    const { userData } = useContext(UserContext);

    const navigate = useNavigate(); 

    const [plans, setPlans] = useState([]); 

    const { name } = useContext(UserContext);

    const { dataMembership } = useContext(UserContext);

    const listOfBenefits = dataMembership.perks; 

    console.log("No home:", dataMembership);


    function deletePlan () {
        const token = userData.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
        promise.then(() => {
            navigate('/subscriptions');
        })
    }

    function chancePlan() {
        navigate('/subscriptions')
    }

    return (
        <Container>
            
         
            <ContainerHome>

            <Header>
            <ImgSymbol src={logoHomePlusImg} alt="logomarca do plano plus" /> 
            <ImgName src={profileImg} alt="profile" />
            </Header>

            <h2>Olá, {name}</h2>

            {listOfBenefits.map((benef, index) => <ButtonBenefits><a href={benef.link}>{benef.title}</a></ButtonBenefits>)}

        

            <Footer>
            <Button onClick={chancePlan}>Mudar plano</Button>
            <ButtonCancel onClick={deletePlan}>Cancelar plano</ButtonCancel>
            </Footer>
     
            </ContainerHome> 
        </Container>
    )
}

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

        color: #FFFFFF; 
    }
`

const ImgSymbol = styled.img`

`

const ImgName = styled.img`
`

