import React from 'react';
import PropTypes from "prop-types"
import { routes } from '../routes';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
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
  }
});

const MenuBar = ({siteTitle}) => {
  const classes = useStyles();

  return (
    <Router>
       <div className={classes.root}>
       <AppBar color="transparent" elevation={0}>
          <Container maxWidth="md">
            <Toolbar> 
              <Typography variant="h5">
                <Link
                  to="/"
                  className={classes.brand}
                >
                  {siteTitle}
                </Link>
              </Typography>
              <Button component={Link} to="/" className={classes.navButton}>Home</Button>
              <Button component={Link} to="/products" className={classes.navButton}>Products</Button>
              <Typography className={classes.flex}></Typography>
              <IconButton className={classes.icon}><InstagramIcon/></IconButton>
              <IconButton className={classes.icon}><FacebookIcon/></IconButton>

            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

MenuBar.propTypes = {
  siteTitle: PropTypes.string,
}

MenuBar.defaultProps = {
  siteTitle: ``,
}

export default MenuBar;