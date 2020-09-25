import React from 'react';
import GLogo from '../../../assets/Images/poweredByGastronaut.png';
import { GASTRONAUT_URL, MESSAGE } from '../../../assets/Constants/constants.json';
import { CustomLogo } from './css';

function GastronautLogo() {
    return (
        <CustomLogo>
            <a href={GASTRONAUT_URL} target='_blank' rel="noopener noreferrer">
                <img src={GLogo} alt={MESSAGE.POWERED_BY} />
            </a>
        </CustomLogo>
    )
}

export default GastronautLogo;