import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { RESERVATION_URL } from '../../../assets/Constants/constants.json';
import {
  EventContainer,
  Label,
  SingleButtonContainer
} from './css';
import { formatHours } from '../../Hooks/formatHours';


function SingleEvent({ index, hour, restaurantId }) {
  const { t } = useTranslation();

  const days = t('date', { returnObjects: true });

  const onSelectTableHandler = (hour) => {
    const url = `${RESERVATION_URL}/${restaurantId}?date=${hour}`;
    window.open(url, "_blank");
  }

  return (
    <EventContainer>
      { index === null 
        ? <Label>...</Label>
        : <>
            <Label>{formatHours(days, index, hour, restaurantId).formatedHour}</Label>
            <Label className='event-hour'>{hour ? hour : t('closed')}</Label>
            <SingleButtonContainer>
                <Button 
                  variant={'outlined' }
                  color='primary' 
                  disabled={!hour}
                  onClick={() => onSelectTableHandler(formatHours(days, index, hour, restaurantId).queryHour)}
                  >{t('reservationButtonSmall')}</Button>
            </SingleButtonContainer>
          </>
      }
    </EventContainer>
  )
}

export default SingleEvent;