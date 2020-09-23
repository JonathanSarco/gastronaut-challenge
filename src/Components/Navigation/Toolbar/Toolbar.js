import React from 'react';
import Logo from '../Logo/Logo';
import Toggle from '../Toggle/Toggle';
import { Toolbar } from './css';

const toolbar = (props) => (
    <Toolbar >
        <Logo/>
        <Toggle />
    </Toolbar>
);

export default toolbar;