import React from 'react';
import Toggle from '../Toggle/Toggle';
import RLogo from '../RLogo/RLogo';
import { 
    CustomToolbar 
} from './css';

function Toolbar(props) {
    return (
    <CustomToolbar >
        <RLogo link={props.restaurant.link} logo={props.restaurant.logo}/>
        <Toggle />
    </CustomToolbar>
    );
}

export default Toolbar;