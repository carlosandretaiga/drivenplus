import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserContext from './contexts/UserContext';

import { GlobalStyle } from '../styles/global';


import SignInPage from './Sign/SignInPage';
import SignUpPage from './Sign/SignUpPage';

export default function App () {

    return (
        
        <BrowserRouter>

            <UserContext.Provider 
            value={{

            }}>
                <Routes>
                <Route path='/' element={<SignInPage />}/>
                <Route path='/sign-up' element={<SignUpPage />}/>
                </Routes>
            </UserContext.Provider>
            <GlobalStyle />
        </BrowserRouter>
        
    )
}