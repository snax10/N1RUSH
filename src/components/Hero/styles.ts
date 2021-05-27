import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    
    margin-top: -6rem;

    @media (max-width: 720px){
        margin-top: 2rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }


    div {
      position: relative;
      margin-left: -2.7rem;
   

        img {
          width: 33rem;
          height: 22rem;
        }
        
        p {
            width: 100%;
            font-size: 1rem;
            line-height: 18px;
            font-weight: 700;
            font-style: normal;
            padding: 1rem;
            margin-top: -1rem;
            background: var(--blue);
            position: absolute;
        }
    }

`;