import React from 'react';
import SingleButton from './SingleButton/SingleButton';
import { RESERVATION_URL, MENU_URL, VOUCHER_URL } from '../../assets/Constants/constants.json';
import { useTranslation } from 'react-i18next';
import {
    MainContainer
} from './css';

function ButtonContainer({ restaurantId }) {
    const { t } = useTranslation();

    const onSelectTableHandler = (url) => {
        const urlToOpen = `${url}/${restaurantId}`;
        window.open(urlToOpen, "_blank");
      }

    return (
        <MainContainer>
            <SingleButton buttonName={t('reservationButton')} clicked={onSelectTableHandler} url={RESERVATION_URL}/>
            <SingleButton buttonName={t('menuButton')} clicked={onSelectTableHandler} url={MENU_URL}/>
            <SingleButton buttonName={t('voucherButton')} clicked={onSelectTableHandler} url={VOUCHER_URL}/>
        </MainContainer>
    )
}

export default ButtonContainer;