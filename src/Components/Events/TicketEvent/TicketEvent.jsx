import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { TICKET_URL } from '../../../assets/Constants/constants.json';
import {
  EventContainer,
  Label,
  SingleButtonContainer
} from './css';
import { formatHours } from '../../Hooks/formatHours';


function TicketEvent({ index, restaurantId, event }) {
  const { t } = useTranslation();
  console.log(event);

  const date = event.date;

  const days = t('date', { returnObjects: true });


  const onSelectTableHandler = (hour) => {
    const url = `${TICKET_URL}/${restaurantId}/${event.id}`;
    window.open(url, "_blank");
  }

  return (
    <EventContainer>
      { index === null 
        ? <Label>...</Label>
        : <>
            <Label>{formatHours(days, index, date, restaurantId).formatedHour}</Label>
            
            <Label className='event-hour'>{event.title}</Label>
            
            <SingleButtonContainer>
                <Button 
                  variant='contained'
                  color='primary' 
                  disabled={ event.status === 'CLOSED' }
                  onClick={() => onSelectTableHandler(formatHours(days, index, date, restaurantId).queryHour)}
                  >{t('reservationButtonSmall')}</Button>
            </SingleButtonContainer>
          </>
      }
    </EventContainer>
  )
}

export default TicketEvent;