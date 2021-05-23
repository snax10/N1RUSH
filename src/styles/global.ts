import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --silver: #EBEBEB;
        --blue: #3EC6E0;
        --dark-blue: #084154;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //16 x 0,9375 = 15px
        }
    }

    html {
        @media (max-width: 720px) {
            font-size: 87.5%; //16 x 0,875  = 14px  
        }
    }

    body {
        background-image: var(---silver);
        -webkit-fonnt-smoothing: antialiased; //Fonts mais detalhadas/nítidas
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed; //Não permitido
    }

`;