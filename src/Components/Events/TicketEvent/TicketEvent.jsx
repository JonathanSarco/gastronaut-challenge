import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { formatHours } from '../../Hooks/formatHours';

import { TICKET_URL } from '../../../assets/Constants/constants.json';
import {
  EventContainer,
  Label,
  SingleButtonContainer
} from './css';

function TicketEvent({ index, restaurantId, event }) {
  const { t } = useTranslation();

  const date = event.date;

  const days = t('date', { returnObjects: true });

  const onSelectTableHandler = () => {
    const url = `${TICKET_URL}/${restaurantId}/${event.id}`;
    window.open(url, "_blank");
  }

  return (
    <EventContainer>
      { index === null
        ? <Label>...</Label>
        : <>
          <Label>{formatHours(days, index, date, restaurantId).formatedHour}</Label>
          <Label className='event-hour'>{event.available ? event.title : t('closed')}</Label>
          <SingleButtonContainer>
            <Button
              variant='contained'
              color='primary'
              disabled={!event.available}
              onClick={() => onSelectTableHandler()}
            >{t('reservationButtonSmall')}</Button>
          </SingleButtonContainer>
        </>
      }
    </EventContainer>
  )
}

export default TicketEvent;