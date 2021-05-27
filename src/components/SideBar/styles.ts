import styled from 'styled-components'

export const Container = styled.aside`
    position: fixed;
    z-index: 999;
    width: 565px;
    height: 250px;
    background: var(--dark-blue);
    display: grid;
    align-items: center;
    top: 90px;
    left: 200px;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '0')};
    display: none;
    

    @media screen and (max-width: 600px) {
        background: rgba(8, 65, 84,  0.62);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3rem;

   
    }
`;

export const SidebarMenu = styled.div`
    font-size: 1.3rem;
    font-weight: 900;
    line-height: 28px;

    color: var(--white);
    cursor: pointer;
    
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 600px) {
        grid-auto-rows: repeat(3, 60px);
    }
`;

