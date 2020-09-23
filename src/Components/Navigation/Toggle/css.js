import styled from 'styled-components';

export const Toggle = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    div {
        width: 90%;
        height: 3px;
        background-color: black;
    }
`;
