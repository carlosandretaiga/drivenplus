import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0E0E13; 
        --background-modal: #FFFFFF; 
        --pink-medium: #FF4791; 
        --gray-ligth: #CECECE;
        --gray-medium: #7E7E7E;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            font-size: 87.5%; 
        }
    }

    //REM - medida, 1rem = font-size = 16px 

    body {
        width: 100vw; 
        display: flex;
        justify-content: center;
        scrollbar-width: none;
        -ms-overflow-style: none;

        background: var(--white); 
        -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar{
        display: none; 
    }

    body, input, textarea, span, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`