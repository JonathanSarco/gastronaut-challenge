import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  SpinnerContainer,
  CustomBackdrop
} from './css';


function Spinner() {
  return (
    <CustomBackdrop>
      <SpinnerContainer >
        <CircularProgress />
      </SpinnerContainer>
    </CustomBackdrop>
  );
}

export default Spinner;