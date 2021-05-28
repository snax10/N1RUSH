import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 375px) {
        width: 100%;
    }

    p {
        background: var(--blue);
        width: 100%;
        height: 100%;
        color: var(--white);
    
        padding-left: 2rem;

        display: flex;
        align-items: center;
        justify-content: left;
    }

    div {
        background: var(--dark-blue);
        height: 100%;
        padding-right: 30%;

        position: relative;

        img {
        width: 42px;
        height: 28px;

        position: absolute;
        top: 25%;
        left: 60%;

        display: flex;
        align-items: center;
        justify-content: right;
        }
    }

`;