import React from 'react'
import {
    ImageContainer
} from './css';

function Image(props) {
    return (
        <ImageContainer>
            <img src={props.image} alt={props.name}/>
        </ImageContainer>
        )
};

export default Image;