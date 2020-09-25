import React from 'react'
import {
    ImageContainer
} from './css';

function Image({ image, name, loadFinished}) {
    return (
        <ImageContainer>
            <img src={image} alt={name}/>
        </ImageContainer>
        )
};

export default Image;