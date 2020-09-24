import React, { useEffect, useState } from 'react';
import ReservationService from '../../Services/ApiService';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import Spinner from '../../Components/UI/Spinner/Spinner';


function Builder() {
    const [restaurant, setRestaurant] = useState(null);

    const [restaurantTheme, setRestaurantTheme] = useState({
        primaryColor: '#d0d0d0', // default Value on load replace this with colorPalette
        contrastText: '#000000' // default Value schillingroofbar neo-heidelberg
    });

    useEffect( () => {
        ReservationService.get('/neo-heidelberg')
            .then( response => {
                setRestaurantTheme(response.data.colorPalette)
                setRestaurant(response.data);
            })
            .catch( error => {
                console.log(error)
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
                <Spinner/> : 
                <Layout restaurant={restaurant}/>
            }
        </ThemeProvider>
    )
}

export default Builder;