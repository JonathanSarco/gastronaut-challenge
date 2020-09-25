import React from 'react'
import Events from '../Events/Events';
import Image from '../Image/Image';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import {
    MainContainer
} from './css';

function MainPage({ restaurant, restaurantId, loadFinished }) {

    return (
        <MainContainer>
            <Image image={restaurant.image} name={restaurant.name} loadFinished={loadFinished}/>
            <Events restaurant={restaurant} restaurantId={restaurantId} />
            <ButtonContainer restaurantId={restaurantId} />
        </MainContainer>
    )
};

export default MainPage;