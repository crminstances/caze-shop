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
    color: `#fff`,
    textDecoration: `none`,
    marginRight: 30
  },
  navButton: {
    textTransform: "none",
    color: `#fff`,
  },
  flex:{
    flexGrow: 1
  },
  icon: {
    color: '#fff'
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
       <AppBar className={classes.appBar} color="transparent" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar> 
              <Typography variant="h4">
                <Link
                  to="/"
                  className={classes.brand}
                >
                  {siteTitle}
                </Link>
              </Typography>
              <Button size="large" onClick={() => {onButtonClick('Home')}}  component={Link} to="/" className={classes.navButton}>Home</Button>
              <Button size="large" onClick={() => {onButtonClick('Products')}} component={Link} to="/products" className={classes.navButton}>Products</Button>
              <Typography className={classes.flex}></Typography>
              <IconButton className={classes.icon}><InstagramIcon/></IconButton>
              <IconButton className={classes.icon}><FacebookIcon/></IconButton>

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