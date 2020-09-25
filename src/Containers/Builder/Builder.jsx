import React, { useEffect, useState } from 'react';
import ReservationService from '../../Services/ApiService';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { useParams } from "react-router-dom";
import CustomAlert from '../../Components/UI/Alert/Alert';


function Builder() {
    let { restaurantId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [errorRestaurant, setErrorRestaurant] = useState(false);
    const [loadImage, setLoadImage] = useState(true);


    const [restaurantTheme, setRestaurantTheme] = useState({
        primaryColor: '#d0d0d0', 
        contrastText: '#000000'
    });

    //schillingroofbar neo-heidelberg

    useEffect( () => {
        ReservationService.get(restaurantId)
            .then( response => {
                setRestaurantTheme(response.data.colorPalette)
                setRestaurant(response.data);
            })
            .catch( error => {
                console.log(error)
                setErrorRestaurant(true)
            })
    }, [restaurantId]);
    
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: restaurantTheme.primaryColor,
                contrastText: restaurantTheme.contrastText
            }
        }
    });

    let showObject = <Layout restaurant={restaurant} restaurantId={restaurantId}/>;

    if (errorRestaurant) {
        showObject = (<CustomAlert/>)
    }

    return (
        <ThemeProvider theme={theme}>
            { !restaurant && !errorRestaurant ? 
                <Spinner/> : 
                showObject
            }
        </ThemeProvider>
    )
}

export default Builder;