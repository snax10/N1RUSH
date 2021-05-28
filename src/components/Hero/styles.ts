import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-top: -6rem;

    @media (max-width: 375px){
        width: 100%;
        margin-top: 1.7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
       
      }

    div {
      position: relative;

        img {
          width: 39rem;
          height: 23rem;

          @media (max-width: 375px) {
            width: 334px;
            height: 190px;
            margin: 1rem;
            
          }

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