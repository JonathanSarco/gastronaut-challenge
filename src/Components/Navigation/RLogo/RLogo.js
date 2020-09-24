import React from 'react';
import { CustomLogo } from './css';

function RLogo({link, logo}) {
    
    return (
        <CustomLogo>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <img src={logo} alt="Powered by Gastronaut" />
            </a>
        </CustomLogo>
    )
}

export default RLogo;