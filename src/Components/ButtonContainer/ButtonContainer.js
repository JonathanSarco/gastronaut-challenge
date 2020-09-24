import React from 'react';
import SingleButton from './SingleButton/SingleButton';
import { useTranslation } from 'react-i18next';
import {
    MainContainer
} from './css';

function ButtonContainer() {
    const { t } = useTranslation();
    return (
        <MainContainer>
            <SingleButton buttonName={t('reservationButton')}/>
            <SingleButton buttonName={t('menuButton')}/>
            <SingleButton buttonName={t('voucherButton')}/>
        </MainContainer>
    )
}

export default ButtonContainer;