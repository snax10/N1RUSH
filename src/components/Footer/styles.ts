import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin-top: 9rem;
   

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 0.8rem;
        font-weight: 400;
        color: var(--white);
        background: var(--blue);
        width: 100%;
        padding: 0.5rem 2rem;
        
    }

    div {
        text-align: right ;
        
        background: var(--dark-blue);
        width: 30%;

        img {
            margin-right: 2rem;
        }
    }

`;