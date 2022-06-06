import React from 'react';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { useContext } from "react";

import UserContext from '../contexts/UserContext';

import logoImg from '../../assets/images/home-plus.svg'
import namePlusImg from '../../assets/images/name-driven-plus.svg'

import listImg from '../../assets/images/list.svg'
import moneyImg from '../../assets/images/money.svg'

import closeImg from '../../assets/images/close.svg'

import comeBackImg from '../../assets/images/come-back.svg'

import styled from 'styled-components';
import Container from '../../shared/Container';
import { useEffect } from 'react';
import Modal from 'react-modal'; 
import Header from '../Header/Header';

Modal.setAppElement('.root');


export default function SubscriptionsPlan () {

    const {planId} = useParams(); 
    const navigate = useNavigate(); 
    const { token, setPlan } = useContext(UserContext);


    const [planSelect, setPlanSelect] = useState([]);
    const [price, setPrice] = useState(''); 
    const [shipId, setShipId] = useState({}); 

    const [cardName, setCardName] = useState(''); 
    const [cardDigits, setCardDigits] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [validity, setValidity] = useState('');



    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const API = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId}`;

        const promise = axios.get(API, config); 
        promise.then(response => {
            //console.log(response.data);
            setPrice(response.data.price);
            setPlanSelect([...response.data.perks]); 
            setShipId({...response.data.perks[0]})
            console.log(planSelect);
            
        })

    }, [token])


    function submitForm(event) {
        event.preventDefault();


        //const token = userData.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const data = {
            membershipId: shipId.membershipId,
            cardName: cardName,
            cardNumber: cardDigits,
            securityNumber: Number(securityCode),
            expirationDate: validity
        }

        const API = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
        const promise = axios.post(API, data, config); 
        promise.then((response) => {
            setPlan(response.data.membership);
            navigate("/home");

        })
        promise.catch(() => {
            alert("Envio de dados bancários não realizado. Revise-os!");
        })
    }


    function validadeCard(creditCard){
        return creditCard
          .replace(/\D/g,'')
          .replace(/(\d{4})(\d)/,'$1 $2')
          .replace(/(\d{4})(\d)/,'$1 $2')
          .replace(/(\d{4})(\d)/,'$1 $2')
          .replace(/(\d{4})(\d)/g,'$1');
      }
    
      function validadeCode(code){
        return code
          .replace(/\D/g,'')
          .replace(/^(\d{3})(\d)/g,'$1');
      }
    
      function validadeDate(date){
        return date
        .replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{2})(\d)/g,'$1');
      }

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
    


    function handleOpenNewTransactionModal() {

        if(isNumeric(cardName) === true) {
            alert('Digite caracteres alfabéticos no campo nome do cartão de crédito!');
            navigate(`/subscriptions/${planId}`);
            //setIsNewTransactionModalOpen(false);
        } else {
            setIsNewTransactionModalOpen(true);
        }
        
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);

    }

    function comeBack () {
        navigate('/subscriptions'); 
    }

    return (
        <Container>
            <Header>
                <ComeBack>
                <button className='come-back' onClick={comeBack}>
                <img src={comeBackImg} alt="voltar" />
                </button>
                </ComeBack>
            </Header>
            <Logo>
            <ImgSymbol src={logoImg} alt="símbolo" />
            <ImgName src={namePlusImg} alt="Driven Plus" />
            </Logo>
            
            <ContainerLogin>

                <ContainerBeneficio>
                    <img src={listImg} alt="simbolo de lista" />
                    <h3>Benefícios:</h3>
                </ContainerBeneficio>

                
                {planSelect.map((plan, index) => <p key={index}>{plan.id}. {plan.title}</p>)}
                
                <ContainerPrice>
                    <img src={moneyImg} alt="simbolo de lista" />
                    <h3>Preço:</h3>
                </ContainerPrice>
                <p>R$ {price.replace('.', ',')} cobrados mensalmente</p>


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
                type='text'
                value={cardDigits}
                onChange={(e) => setCardDigits(validadeCard(e.target.value))}
                //required maxlength="16"
                //pattern="[0-9]{16}"
                autoComplete='on'
                />

                <ContainerInput>
                    <InputPlan
                    placeholder='Código de segurança'
                    type='text'
                    value={securityCode}
                    onChange={(e) => setSecurityCode(validadeCode(e.target.value))}
                    //required maxlength="3"
                    //pattern="[0-9]{3}"
                    autoComplete='on'
                     />

                    <InputPlan
                    placeholder='Validade'
                    type='text'
                    value={validity}
                    onChange={(e) => setValidity(validadeDate(e.target.value))}
                    //required maxlength="5"
                    autoComplete='on'
                     />
                </ContainerInput>

                <button type='button' onClick={handleOpenNewTransactionModal}>ASSINAR</button>

                <Modal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >   

                <button 
                onClick={handleCloseNewTransactionModal}
                className="react-modal-close"
                >
                    <img src={closeImg} alt="botão para fechar modal" />
                </button>
                    <TextModal>
                        Tem certeza que deseja assinar o 
                        plano Driven Plus (R$ {price.replace('.', ',')})?
                    </TextModal>

                    <ContainerButtonsModal>

                        <ButtonNot>
                            <button type='button' onClick={handleCloseNewTransactionModal}>NÃO</button>
                        </ButtonNot>

                        <ButtonYes>
                            <button type='submit' onClick={submitForm}>SIM</button>
                        </ButtonYes>

                    </ContainerButtonsModal>
                </Modal>
               
            </FormLogin>
            </ContainerLogin>
                
        </Container>
    )
}

const ComeBack = styled.div`
    margin-left: 20px;

`
const ButtonClose = styled.button`

        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #FF4791;
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

const ContainerButtonsModal = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

const ButtonYes = styled.div`

button[type='submit'] {
        margin: 0 auto; 
        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #FF4791;
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
}

`

const ButtonNot = styled.div`

button {
        margin: 0 auto; 
        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #CECECE;
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
}

`

const TextModal = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000000;

`


const ContainerBeneficio = styled.div`
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;

    img {
        margin-right: 5px;
    }
`

const ContainerPrice = styled.div`
    display: flex; 
    padding-left: 5px;
    margin-right: 5px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    img {
        margin-right: 5px;
    }

`

const ContainerLogin = styled.div`
    margin: 0 auto; 
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-left: 5px;

        color: #FFFFFF;
    }
`

const InputLogin = styled.input`

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px; 
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
        padding-left: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-medium);
    }

`


const FormLogin = styled.div`
    margin: 0 auto; 
    display: flex;
    flex-direction: column;

    button {
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
        }

`


const Logo = styled.nav` 
    margin: 0 auto; 
    margin-top: 5px;
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
margin-bottom: 20px;
`
    