import React from 'react'
import MainPage from '../../Components/MainPage/MainPage';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Navigation/Footer/Footer';

function Layout({restaurant}) { 
    return (
        <>
            <Toolbar restaurant={restaurant}/>
            <MainPage restaurant={restaurant}/>
            <Footer />
        </>
        )
};

export default Layout;