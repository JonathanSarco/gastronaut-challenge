import React from 'react';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { 
    AlertContainer,
    CustomBackdrop
} from './css';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function CustomAlert() {
    const classes = useStyles();

    const { t } = useTranslation();

    return ( 
        <CustomBackdrop>
          <AlertContainer>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Alert severity="error">
                      { t('restaurantNotFound') }
                  </Alert>
                </CardContent>
            </Card>
            </AlertContainer>
        </CustomBackdrop>
    )
}

export default CustomAlert;