import styled from 'styled-components'

export const Container = styled.header`
    background: var(--dark-blue);
`;

export const Content = styled.nav`
    max-width: 1020px;
    margin: 0 auto;
    

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul {
        display: flex;
        align-items: center;

        li {
            list-style: none;
            display: flex;
            align-items: center;
            padding: 10px 15px;

            & + li {
                height: 30px;
                border-left: 1px solid var(--dark-blue);
            } 

            img {
                margin-right: 0.8rem;
                width: 1.7rem;
                height: 1rem;
            }

            span {
                font-size: 0.9rem;
                font-weight: 500;
                line-height: 1rem;
            }
        }
    }



`;