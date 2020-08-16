import React from "react"
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Container, IconButton} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles((theme) => ({
    root: {
      background: `#2c2c2c`,
      color: `#fff`,
      textDecoration: `none`,
      padding: 50
    },
    spacer: {
      marginTop: 55,
      padding: 150,
      background: '#e9e9e9',
      textAlign: "center"
    },
    _padingTop:{
      padding: 10
    },
    capitilize:{
      textTransform: "capitalize",
      marginLeft: 2
    },
    icon: {
      color: '#fff'
    },
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      zIndex: 10000
    },

}));

const Footer = () => {
    const classes = useStyles();
    
    return(
      <>
        {/* <Fab color="primary" size="large" className={classes.absolute}>
          <InstagramIcon/>
        </Fab> */}
        <div className={classes.spacer}>
          <Typography variant="h4" color="textPrimary" component="p">
            Is simply dummy text of the printing and typesetting industry.
          </Typography>
        </div>
        <footer className={classes.root}>
          <Container maxWidth="lg">
            <Grid container 
                  justify="space-between" 
                  spacing={1}>
                <Grid item>
                  <Button size="large" className={classes.capitilize} color="secondary">Caze-Shop</Button>
                  <Button size="large" className={classes.capitilize} color="secondary">About us</Button>
                  <Button size="large" className={classes.capitilize} color="secondary">Blog</Button>
                </Grid>
                <Grid item>
                  <div className={classes._padingTop}>© {new Date().getFullYear()}, Built with React </div>
                </Grid>
                <Grid item>
                  <IconButton className={classes.icon}><InstagramIcon/></IconButton>
                  <IconButton className={classes.icon}><FacebookIcon/></IconButton>
                </Grid>
                
              </Grid>
          </Container>
        </footer>
      </>
    );
}

export default Footer;