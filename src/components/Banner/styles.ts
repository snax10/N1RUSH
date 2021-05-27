import banner from '../../assets/principal_banner_desktop.jpg'

import styled from 'styled-components'

export const Container = styled.div` 
        width: 100vw;
        height: 90vh;

        background: url(${banner}) no-repeat center top;
        background-position: center;
        background-size: cover;

    `;

    export const Content = styled.div` 
        height: calc(100vh -80px);
        max-height: 100%;
        width: 100vw;
        
        @media screen and (max-width: 700px) {
            position: relative;
            text-align: center;
            width: 100%;
        }
    
    `;
    
    export const BannerItems = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        height: 100vh;
        
        padding: 0 2rem;
        width: 1150px;
        line-height: 1;

        @media screen and (max-width: 1150px) {
            width: 100%;
        }
      
    `;

    export const BannerH1 = styled.h1`
            font-size: 3rem;
            font-weight: 900;
            font-style: normal;
            line-height: 54px;
            text-align: right;
            color: var(--white);
    `;

    export const BannerH2 = styled.h2`
            font-size: 4rem;
            font-weight: 900;
            font-style: normal;
            line-height: 82px;
            text-align: right;

            margin-bottom: 1rem;
            color: var(--blue);

            span {
                font-size: 2rem;
                
            }
`;
    
    export const BannerP = styled.p`
            font-size: 1rem;
            font-weight: 400;
            font-style: normal;
            line-height: 24px;
            text-align: right;
            color: var(--white);
    `;
 