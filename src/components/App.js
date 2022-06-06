import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './contexts/UserContext';

import { GlobalStyle } from '../styles/global';


import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';
import Subscriptions from './Subscriptions/Subscriptions';
import SubscriptionsPlan from './Subscriptions/SubscriptionsPlan';
import Home from './Home/Home';



export default function App () {

    const [token, setToken] = useState(''); 
    const [name, setName] = useState('');
    const [plan, setPlan] = useState({});


    return (
        <UserContext.Provider 
            value={{ token, setToken, name, setName, plan, setPlan }}>
        <BrowserRouter>
                <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                <Route path='/subscriptions' element={<Subscriptions />}/>
                <Route path='/subscriptions/:planId' element={<SubscriptionsPlan />}/>
                <Route path='/home' element={<Home />}/>
                </Routes>

            <GlobalStyle />
        </BrowserRouter>
    </UserContext.Provider>
        
    )
}