import React from 'react';
import Button from '@material-ui/core/Button';
import {
    SingleButtonContainer
} from './css';


function SingleButton({ buttonName }) {
    return (
        <SingleButtonContainer>
            <Button color='primary' variant='contained' fullWidth>{buttonName}</Button>
        </SingleButtonContainer>
    );
}

export default SingleButton;