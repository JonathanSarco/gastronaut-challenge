import React from 'react';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

import { AlertContainer } from './css';

function CustomAlert({ message }) {

    const { t } = useTranslation();

    return ( 
        <AlertContainer>
            <Alert severity="error">
                { t('restaurantNotFound') }
            </Alert>
        </AlertContainer>
    )
}

export default CustomAlert;