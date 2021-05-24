import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    display: grid;
    gap: 6rem;
    grid-template-columns: 1fr 1fr;
    
    margin-top: -6rem;

    div {
      position: relative;
      margin-left: -2.7rem;
     
        img{
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