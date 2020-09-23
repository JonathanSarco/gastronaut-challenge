import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    SpinnerContainer
} from './css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(50)
    },
  },
}));

function Spinner() {
  const classes = useStyles();

  return (
    <SpinnerContainer >
      <CircularProgress />
    </SpinnerContainer>
  );
}

export default Spinner;