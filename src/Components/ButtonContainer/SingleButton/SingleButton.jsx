import React from 'react';
import Button from '@material-ui/core/Button';

import {
    SingleButtonContainer
} from './css';


function SingleButton({ buttonName, clicked, url }) {
    return (
        <SingleButtonContainer>
            <Button color='primary' variant='contained' fullWidth onClick={() => clicked(url)}>{buttonName}</Button>
        </SingleButtonContainer>
    );
}

export default SingleButton;