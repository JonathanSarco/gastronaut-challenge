import styled from 'styled-components';

export const EventContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;

    @media(max-width: 500px) {
        .event-hour {
            display: none;
        }
    }

    @media(max-width: 350px) {
        label {
            display: none;
        }
    }
`;

export const Label = styled.label`
    font-family: 'Roboto';
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.7;
`;

export const SingleButtonContainer = styled.div`
  
`;  
