import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    SpinnerContainer
} from './css';


function Spinner() {
  return (
    <SpinnerContainer >
      <CircularProgress />
    </SpinnerContainer>
  );
}

export default Spinner;