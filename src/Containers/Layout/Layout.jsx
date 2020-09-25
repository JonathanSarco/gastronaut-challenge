import React from 'react'
import MainPage from '../../Components/MainPage/MainPage';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Footer from '../../Components/Navigation/Footer/Footer';
import { Composition } from 'atomic-layout';
import { mobileTemplate } from '../../assets/Constants/templates';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
      width: '80vw'
    },
    bullet: {
      display: 'inline-block',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Layout({ restaurant, restaurantId }) { 
    const classes = useStyles();


    return (
        <Composition areas={mobileTemplate} gap={10} justifyContent='center'>
            {
                ({ ToolbarLayout, MainLayout, FooterLayout }) => (
                    <>
                        <ToolbarLayout>
                            
                        </ToolbarLayout>
                        <MainLayout>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Toolbar restaurant={restaurant}/>
                                    <MainPage restaurant={restaurant} restaurantId={restaurantId}/>
                                </CardContent>
                            </Card>
                        </MainLayout>
                        <FooterLayout>
                            <Footer />
                        </FooterLayout>
                    </>    
                )
            }
        </Composition>
        )
};

export default Layout;