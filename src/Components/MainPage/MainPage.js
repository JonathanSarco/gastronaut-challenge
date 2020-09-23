import React from 'react'
import Image from '../Image/Image';
import { 
    MainContainer
} from './css';

function MainPage(props) {
    console.log(props.restaurant);
    return (
        <MainContainer>
            <Image image={props.restaurant.image} name={props.restaurant.name}/>
        </MainContainer>
        )
};

export default MainPage;