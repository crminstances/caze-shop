import React from "react"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      background: `#000`,
      color: `#fff`,
      textDecoration: `none`
    },
});

const Footer = () => {
    const classes = useStyles();
    
    return(
        <footer className={classes.root}>
          © {new Date().getFullYear()}, Built with React 
        </footer>
    );
}

export default Footer;