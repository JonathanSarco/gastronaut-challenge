import React from 'react';
import GLogo from '../../../assets/poweredByGastronaut.png';
import { CustomLogo } from './css';

function GastronautLogo() {
    return (
        <CustomLogo>
            <a href='https://www.gastronaut.ai' target='_blank' rel="noopener noreferrer">
                <img src={GLogo} alt="Powered by Gastronaut" />
            </a>
        </CustomLogo>
    )
}

export default GastronautLogo;