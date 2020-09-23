import React from 'react';
import GLogo from '../../../assets/poweredByGastronaut.png';
import { Logo } from './css';

const logo = () => (
    <Logo>
        <img src={GLogo} alt="Powered by Gastronaut"/>
    </Logo>
);

export default logo;