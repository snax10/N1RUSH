
import styled from 'styled-components'

export const Nav = styled.nav`
    background: transparent;
    height: 0;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100vw;
    margin: 1rem auto;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
    img {
        padding-right: 0.8rem;
        cursor: pointer;
    }
`;

    export const NavLinks = styled.ul`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        li {
            list-style: none;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            color: var(--white);

            & + li {
            height: 30px;
            border-left: 1px solid var(--white);
        }
    }

            img { 
                height: 1.4rem;
            }

                span {
                font-size: 0.7rem;
                font-weight: 500;
                line-height: 1rem;

                 transition: color 0.2s;

                 &:hover {
                    color: var(--blue);
                }

                    @media screen and (max-width: 600px) {
                    position: absolute;
                    top: 0px;
                    left: 25px;
                }
            }

        `;




