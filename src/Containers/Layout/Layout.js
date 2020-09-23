import React from 'react'
import MainPage from '../../Components/MainPage/MainPage';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';

function Layout(props) {
    
    return (
        <>
            <Toolbar />
            <MainPage restaurant={props.restaurant}/>
        </>
        )
};

export default Layout;