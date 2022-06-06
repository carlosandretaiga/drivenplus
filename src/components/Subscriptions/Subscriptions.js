import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from 'axios';

import { useContext } from "react";
import UserContext from '../contexts/UserContext';


import styled from 'styled-components';
import Container from '../../shared/Container';





function Plan({img, price, id}) {

    return (
        <Link to={`/subscriptionsplan/${id}`}>
        <PlanPlus>
        <img src={img} alt="logo" />
        <Span>R$ {price.replace('.', ',')}</Span>
        </PlanPlus>
        </Link>
    )
}

export default function Subscriptions () {

    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]); 

    useEffect(() => {
        if (token !== '') {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
    
            const API = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";
    
            const promise = axios.get(API, config);
    
            promise.then(response => {
                setPlans([...response.data]);
                console.log(plans); 
            })
        }

    }, [token])

    
 
return (
    <Container>

        <ContainerSubscriptions>
        <Title>Escolha seu Plano</Title> 

        {plans.map((plan) => 
        <PlanPlus key={plan.id} onClick={() => navigate(`/subscription/${plan.id}`)}>
        <img src={plan.image} alt="logo" />
        <Span>R$ {plan.price.replace('.', ',')}</Span>
        </PlanPlus>
       
        )}

        </ContainerSubscriptions>
      
    </Container>
    )
}


const PlanPlus = styled.div`
    cursor: pointer;
    margin-top: 24px;
    padding-left: 16px; 
    padding-right: 16px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 290px;
    height: 180px;

    transition: filter 0.2s;


    &:hover {
        filter: brightness(0.4);
    }

    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;

`


const Title = styled.h1`
    margin-top: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--white);
`

const ContainerSubscriptions = styled.div`
    margin: 0 auto; 
    a { 
        text-decoration: none;
    }
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
`