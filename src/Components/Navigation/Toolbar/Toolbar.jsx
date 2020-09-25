import React from 'react';
import Toggle from '../Toggle/Toggle';
import RLogo from '../RLogo/RLogo';
import {
    CustomToolbar
} from './css';

function Toolbar({ restaurant }) {
    return (
        <CustomToolbar >
            <RLogo link={restaurant.link} logo={restaurant.logo} name={restaurant.name}/>
            <Toggle />
        </CustomToolbar>
    );
}

export default Toolbar;