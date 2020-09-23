import styled from 'styled-components';

export const Toolbar = styled.header`
    height: 50px;
    width: 100%;
    position: fixed;
    top: 10px;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    nav {
        height: 100%;
    }
`;


export const NavContainer = styled.nav`
    @media (max-width: 499px) {
        display: none;
    }
`;