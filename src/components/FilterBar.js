import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Toolbar, AppBar, Typography, makeStyles, Container, Button} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      top: 0,
      position: "sticky",
      boxShadow: "none",
    },
    flex:{
        flexGrow: 1
    },
    expand: {
      height: 10000
    },
    tabs: {
        paddingTop: 9,
        top: 0,
        position: "sticky",
        boxShadow: "none",
    },
    label: {
    textTransform: 'capitalize',
    minHeight: 5
    },
    margin: {
        margin: 10,
        textTransform: 'capitalize',
    },
  });

const FilterBar = ({ children, page }) => {
    const classes = useStyles();
    const [value] = React.useState(0);

    function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }
  return (
    <>
        <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item md={2} sm={3} xs={3}>
                  <div className={classes.tabs}>
                    <Typography variant="h4" component="p">
                      {page}
                    </Typography>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab className={classes.label}  label="All" {...a11yProps(0)} ></Tab>
                        <Tab className={classes.label} label="Tees" {...a11yProps(1)} />
                        <Tab className={classes.label} label="Crew Necks" {...a11yProps(2)} />
                        <Tab className={classes.label} label="Hats" {...a11yProps(3)} />
                        <Tab className={classes.label} label="Bundles" {...a11yProps(4)} />
                        <Tab className={classes.label} label="Carry" {...a11yProps(5)} />
                    </Tabs>

                  </div>
                </Grid>
                <Grid item md={10} sm={9} xs={9}>
                 <AppBar color="secondary" className={classes.root}>
                        <Toolbar>
                            <Typography>Filter: </Typography>
                            <Button size="small" className={classes.margin}>Color</Button>
                            <Button size="small" className={classes.margin}>Size</Button>
                        </Toolbar>
                 </AppBar>
                 <Container maxWidth="lg">
                    { children }
                 </Container>
                
                </Grid>
            </Grid>
        </Container>
    </>
  );
}

export default FilterBar;