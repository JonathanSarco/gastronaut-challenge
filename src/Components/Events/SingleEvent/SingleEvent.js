import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

import {
  EventContainer,
  Label,
  SingleButtonContainer
} from './css';


function SingleEvent({ index, hour }) {
  const { t } = useTranslation();

  const days = t('date', { returnObjects: true });
  
  const currentDate = () => {
    if (index === 0) {
      return days.today;
    }

    if (index === 1) {
      return days.tomorrow;
    }

    let newDate = new Date();
    newDate.setDate(newDate.getDate() + index);

    let day = days.weekdays[newDate.getDay()];
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear().toString().substr(-2);

    return `${day} the ${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`
  }

  return (
    <EventContainer>
      { index === null 
        ? <Label>...</Label>
        : <>
            <Label>{currentDate()}</Label>
            <Label>{hour ? hour : t('closed')}</Label>
            <SingleButtonContainer>
                <Button variant='outlined' color='primary' disabled={!hour}>{t('reservationButtonSmall')}</Button>
            </SingleButtonContainer>
          </>
      }
    </EventContainer>
  )
}

export default SingleEvent;