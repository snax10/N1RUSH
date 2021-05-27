import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --background: #EBEBEB;
        --silver-200: #f5f5f5;
        --blue: #3EC6E0;
        --dark-blue: #084154;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* html {
        @media (max-width: 1024px) {
            font-size: 93.75%; //16 x 0,9375 = 15px
        }
    }

    html {
        @media (max-width: 720px) {
            font-size: 87.5%; //16 x 0,875  = 14px  
        }
    } */

    body, html {
        width: 100%;
        
        overflow-x: hidden;
        -webkit-fonnt-smoothing: antialiased; //Fonts mais detalhadas/nítidas
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;   
    }

    button {
        cursor: pointer;
    }

    //====== Modal styles =======
    .react-modal-overlay {
        background: rgba(8, 65, 84, 0.62);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 25%;
        max-width: 576px;

        background: var(--white);
        padding: 3rem;
        position: relative;
        border-radius: 5px;

        @media screen and (max-width: 1100) {
            
        }
    }

    .react-modal-close {
        position: absolute;
        right: 0.6rem;
        top: 0;
        border: 0;
        background: transparent;

        transition: 0.2s;

        &:hover {
            filter: brightness(0.8)
        }
    }
    
`;