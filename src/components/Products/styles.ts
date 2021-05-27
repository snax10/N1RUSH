import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1120px;
    margin: 8rem auto;

    h3 {
        padding-left: 5rem;
        font-size: 2.2rem;
        line-height: 42px;
        font-weight: 300;
        font-style: normal;
        color: var(--dark-blue);
    }

    section {
        margin-top: 2rem;
        padding-left: 7rem;
        display: flex;
        gap: 1rem;


        @media (max-width: 720px){
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

        div {
            margin-top: 5rem;
            box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
            border-radius: 20px;

            img {
                width: 300px;
                height: 363px;
            }
        }
        
        footer {
            text-align: left;
            border-top: 2px solid var(--blue);
            background: var(--silver-200);
            padding: 0.5rem ;
        
            p {
                align-items: flex-flex-start;
                margin-top: 1rem;
                font-size: 0.8rem;
                font-weight: 300;
                color: var(--dark-blue);
            }
            h6 {
              
                font-size: 1.1rem;
                margin-top: 0.5rem;
                color: var(--dark-blue);
            }

            button {
                padding: 0.7rem 4rem;
                margin-top: 1rem;

                border: none;
                border-radius: 5px;
                outline: none;

                background: var(--blue);
                color: var(--white);

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.8);
                }
            }
        }

    }
`;




  