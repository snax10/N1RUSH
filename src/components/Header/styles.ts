import styled from 'styled-components'

export const Container = styled.header`
    background: transparent;
    
`;

export const Content = styled.nav`
    width: 100%;
    margin: 2rem auto;
    position: absolute;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        margin-right: 2rem;
        cursor: pointer;

    }

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            list-style: none;
            display: flex;
            align-items: center;
            padding: 10px 15px;
            color: var(--white);
            cursor: pointer;

            & + li {
                height: 30px;
                border-left: 1px solid var(--white);
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

                transition: color 0.2s;

                &:hover {
                    color: var(--blue);
                }
            }
        }
    }



`;