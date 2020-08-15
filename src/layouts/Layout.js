import React from "react"
import MenuBar from "../components/MenuBar"
import Typography from '@material-ui/core/Typography';
import Footer from "../components/Footer"
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import {mainRoutes} from '../routes';
import {ReactView} from "../helpers/helper"
import { Card, makeStyles, CardMedia } from '@material-ui/core';
import headerImage from '../assets/main.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom:10,
    boxShadow: "none",
    overflow: "visible"
  },
  container: {
    position: "relative",
  },
  media: {
    height: 700,
    width: "100%",
    objectFit: "cover"
  },
  title:{
    position: "absolute",
    width: "5%",
    bottom: "5%",
    left: "17.5%",
    color: "#000",
    background: "#e9e9e9",
    width: "auto",
    padding: 15
  }
});

const Layout = () => {

  const theme = createMuiTheme({
    typography: {
     "fontFamily": `"Montserrat Subrayada", sans-serif`,
     "fontSize": 14,
     "fontWeightRegular": 400,
     "fontWeightBold": 700
    },
    palette: {
      primary: {
        light: '#000',
        main: '#000',
        dark: '#fff',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fff',
        main: '#fff',
        dark: '#000',
        contrastText: '#000',
      }
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState("Home");
  const changePageTitle = (title = "Home") => {
    setValue(title);
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuBar onButtonClick={changePageTitle} siteTitle={process.env.REACT_APP_SITE_TITLE} />
        <div className={classes.container}>
          <img src={headerImage} alt="Snow" className={classes.media}></img>
          <div className={classes.title}>
            <Typography variant="h4" component="p">
              {value}
            </Typography>
          </div>
        </div>
        <div>
          <main>
            <ReactView routes={mainRoutes}/>
          </main>
        </div>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Layout;