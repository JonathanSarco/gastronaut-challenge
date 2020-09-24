import React from 'react';
import SingleEvent from './SingleEvent/SingleEvent';
import {
    MainContainer
} from './css';

function Events({ restaurant, restaurantId }) {

    let regularHours = <></>;
    if (restaurant.regularHours) {
        let hours = restaurant.regularHours;
        
        regularHours = hours.map( (event,_i) => (
            <SingleEvent 
                key={_i}
                index={_i}
                hour={event}
                restaurantId={restaurantId}
            />
        ));

        if (regularHours.length > 6 ) {
            // If there are more than 6 events, only show the first 6
            // Then add ... to show
            regularHours = regularHours.slice(0, 6);
            regularHours.push( <SingleEvent key={7} index={null} />)
        }
    }

    return (
        <MainContainer>
            { regularHours }
        </MainContainer>
    )
}

export default Events;