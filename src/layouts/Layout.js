import React from "react"
import MenuBar from "../components/MenuBar"
import Footer from "../components/Footer"
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import {mainRoutes} from '../routes';
import {ReactView} from "../helpers/helper"
import { Card, makeStyles, CardMedia } from '@material-ui/core';
import headerImage from '../assets/main.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 700,
  },
});

const Layout = () => {

  const theme = createMuiTheme({
    typography: {
     "fontFamily": `"Montserrat Subrayada", sans-serif`,
     "fontSize": 14,
     "fontWeightRegular": 400,
     "fontWeightBold": 700
    }
  });

  const classes = useStyles();
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuBar siteTitle={process.env.REACT_APP_SITE_TITLE} />
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={headerImage}
            alt="Header Image"
          />
        </Card>
        <div>
          <main>
            <ReactView routes={mainRoutes}/>
          </main>
        </div>
        {/* <Footer/> */}
      </ThemeProvider>
    </>
  )
}

export default Layout;