import React, { useEffect, useState } from 'react';
import ReservationService from '../../Services/ApiService';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import Spinner from '../../Components/UI/Spinner/Spinner';


function Builder() {
    const [errorFetch, setErrorFetch] = useState(null);
    const [restaurant, setRestaurant] = useState(null);

    const [restaurantTheme, setRestaurantTheme] = useState({
        primaryColor: '#d0d0d0', // default Value on load replace this with colorPalette
        contrastText: '#000000' // default Value
    });

    useEffect( () => {
        ReservationService.get('/schillingroofbar')
            .then( response => {
                console.log(response.data);
                setRestaurantTheme(response.data.colorPalette)
                setRestaurant(response.data);
            })
            .catch( error => {
                setErrorFetch(error);
            })
    }, []);
    
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: restaurantTheme.primaryColor,
                contrastText: restaurantTheme.contrastText
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            { !restaurant ? 
                <Spinner /> : 
                <Layout restaurant={restaurant}/>
            }
        </ThemeProvider>
    )
}

export default Builder;