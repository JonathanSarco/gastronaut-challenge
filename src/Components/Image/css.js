import styled from 'styled-components';

export const ImageContainer = styled.div`
    min-width: 500px;    
    width: 100%;
    height: 60vw;
    max-height: 400px;

    img {
        height: 100%;
        border-radius: 5px;
        margin:auto;
        display:block;
    }

    @media(max-width: 800px) {
        min-width: auto
    }
`; 