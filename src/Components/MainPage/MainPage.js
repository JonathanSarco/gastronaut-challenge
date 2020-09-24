import React from 'react'
import Events from '../Events/Events';
import Image from '../Image/Image';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import { 
    MainContainer
} from './css';

function MainPage(props) {
    
    return (
        <MainContainer>
            <Image image={props.restaurant.image} name={props.restaurant.name}/>
            <Events restaurant={props.restaurant}/>
            <ButtonContainer />
        </MainContainer>
        )
};

export default MainPage;