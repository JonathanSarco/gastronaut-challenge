import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { RESERVATION_URL } from '../../../assets/Constants/constants.json';
import {
  EventContainer,
  Label,
  SingleButtonContainer
} from './css';


function SingleEvent({ index, hour, restaurantId }) {
  const { t } = useTranslation();

  const days = t('date', { returnObjects: true });
  
  const currentDate = () => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + index);

    let day = days.weekdays[newDate.getDay()];
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear().toString().substr(-2);

    if (index === 0) {
      return {
        formatedHour: days.today,
        queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}`: `${month}`}-${newDate.getDate()}` 
      }
    }

    if (index === 1) {
      return {
        formatedHour: days.tomorrow,
        queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}`: `${month}`}-${newDate.getDate()}` 
      }
    }

    return {
      formatedHour: `${day} the ${date}.${month < 10 ? `0${month}` : `${month}`}.${year}`,
      queryHour: `${newDate.getFullYear()}-${month < 10 ? `0${month}`: `${month}`}-${newDate.getDate()}` 
    }
  }

  const onSelectTableHandler = (hour) => {
    const url = `${RESERVATION_URL}/${restaurantId}?date=${hour}`;
    window.open(url, "_blank");
  }

  return (
    <EventContainer>
      { index === null 
        ? <Label>...</Label>
        : <>
            <Label>{currentDate().formatedHour}</Label>
            <Label>{hour ? hour : t('closed')}</Label>
            <SingleButtonContainer>
                <Button 
                  variant={'outlined' }
                  color='primary' 
                  disabled={!hour}
                  onClick={() => onSelectTableHandler(currentDate().queryHour)}
                  >{t('reservationButtonSmall')}</Button>
            </SingleButtonContainer>
          </>
      }
    </EventContainer>
  )
}

export default SingleEvent;