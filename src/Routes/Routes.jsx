import React from 'react';
import { Route } from 'react-router-dom';
import Builder from '../Containers/Builder/Builder';

function Routes() {

  return (
      <>
        <Route path='/' exact render={ () => (<Builder  />)} />
        <Route path='/:restaurantId' render={ () => (<Builder  />)} />
      </>
      
  );
}

export default Routes;
