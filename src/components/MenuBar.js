import React from 'react';
import PropTypes from "prop-types"
import {
  Link
} from "react-router-dom";
import { Toolbar, AppBar, Typography, makeStyles, Container, Button, IconButton} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,

  },
  brand: {
    color: `#000`,
    textDecoration: `none`,
    marginRight: 30,
    textTransform: "capitalize"
  },
  navButton: {
    textTransform: "none",
    color: `#000`,
  },
  flex:{
    flexGrow: 1,
    textAlign: "center"
  },
  icon: {
    color: '#000'
  },
  appBar:{
    position: "absolute",
  }
});

const MenuBar = ({siteTitle, onButtonClick}) => {
  const classes = useStyles();

  return (
    <>
       <div className={classes.root}>
       <AppBar className={classes.appBar} color="secondary" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar> 
              <Typography variant="h6" component="p">
                <Link
                    to="/"
                    className={classes.brand}
                  >
                    C A Z E
                </Link>
              </Typography>
              <Typography className={classes.flex} variant="h4" component="p">
                <Button size="large" component={Link} to="/" className={classes.navButton}>Home</Button>
                <Button size="large" component={Link} to="/products" className={classes.navButton}>Products</Button>
              </Typography>
              <IconButton href="https://instagram.com/golds.caze" target="_blank" className={classes.icon}><InstagramIcon/></IconButton>
              <IconButton href="https://www.facebook.com/gold.caze" target="_blank" className={classes.icon}><FacebookIcon/></IconButton>

            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}

MenuBar.propTypes = {
  siteTitle: PropTypes.string,
}

MenuBar.defaultProps = {
  siteTitle: ``,
}

export default MenuBar;