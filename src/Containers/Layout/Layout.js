import React from 'react'
import MainPage from '../../Components/MainPage/MainPage';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Navigation/Footer/Footer';

function Layout({ restaurant, restaurantId }) { 
    return (
        <>
            <Toolbar restaurant={restaurant}/>
            <MainPage restaurant={restaurant} restaurantId={restaurantId}/>
            <Footer />
        </>
        )
};

export default Layout;