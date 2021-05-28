import banner from '../../assets/principal_banner_desktop.jpg'

import styled from 'styled-components'

export const Container = styled.div` 
        background: url(${banner}) no-repeat center top;
        width: 100vw;
        height: 90vh;
        background-position: center;
        background-size: cover;

        @media screen and (max-width: 375px) {
            background: url(${banner});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: left;
            width: 100%;
            height: 80vh;
            
        }
    `;

    export const Content = styled.div` 
            width: 1100px;
        
        @media screen and (max-width: 375px) {
            position: relative;
            text-align: center;
            width: 100%;
            height: 50vh;
        }
    
    `;
    
    export const BannerItems = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80vh;
        
        padding: 0 2rem;
        line-height: 1;

        @media screen and (max-width: 375px) {
            background: rgba(0, 0, 0, 0.65);
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
 