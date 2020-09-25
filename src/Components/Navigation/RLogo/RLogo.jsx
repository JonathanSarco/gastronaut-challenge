import React from 'react';
import { CustomLogo } from './css';

function RLogo({ link, logo, name }) {

    return (
        <CustomLogo>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <img src={logo} alt={name} />
            </a>
        </CustomLogo>
    )
}

export default RLogo;