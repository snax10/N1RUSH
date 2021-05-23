import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 2rem auto;
`;

export const Content = styled.div`
    margin: 3rem auto;
    margin-left: 5rem;


    h3 {
        font-size: 2.2rem;
        line-height: 42px;
        font-weight: 300;
        font-style: normal;
        color: var(--dark-blue);
    }

    section {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
     
        
        footer {
            text-align: center;
            border-top: 2px solid var(--blue);
            background: var(--silver);
            padding: 0.5rem ;
        
            p {
                margin-top: 1rem;
                font-size: 0.8rem;
                font-weight: 300;
                color: var(--dark-blue);
            }

            button {
                padding: 0.7rem 4rem;
                margin-top: 1rem;

                border: none;
                border-radius: 5px;

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
