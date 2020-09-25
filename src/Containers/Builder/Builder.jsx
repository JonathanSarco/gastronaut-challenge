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
    const [imageLoaded, setImageLoaded] = useState(false);
    const [restaurantTheme, setRestaurantTheme] = useState({
        primaryColor: '#d0d0d0',
        contrastText: '#000000'
    });

    useEffect(() => {
        ReservationService.get(restaurantId)
            .then(response => {
                setRestaurantTheme(response.data.colorPalette)
                setRestaurant(response.data);
            })
            .catch(error => {
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

    const imageLoadedHandler = () => {
        setImageLoaded(true);
    }

    // Check if the image is loading, that's why Spinners is being showned
    let showObject = (
        <>
            <div style={{ display: !imageLoaded ? 'block' : 'none' }}>
                <Spinner />
            </div>
            <div style={{ display: !imageLoaded ? 'none' : 'block' }}>
                <Layout restaurant={restaurant} restaurantId={restaurantId} loadFinished={imageLoadedHandler} />
            </div>

        </>
    );

    if (errorRestaurant) {
        showObject = (<CustomAlert />)
    }

    return (
        <ThemeProvider theme={theme}>
            { !restaurant && !errorRestaurant ?
                <Spinner /> :
                showObject
            }
        </ThemeProvider>
    )
}

export default Builder;