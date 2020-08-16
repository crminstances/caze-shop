import React from "react";
import FilterBar from "../components/FilterBar"
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: "none",
    overflow: "visible"
  },
  media: {
    height: 400,
  },
});

const content = (classes) => {
  let cards = [1,2,3,4,5,6,7,8,9,10,11,12]
  let prod
  return cards.map((card, key) => {
    prod = card % 3 === 0 ? 3 : card % 3
    return (
      <Grid item lg={4} sm={12} key={key}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`../images/p${prod}.jpg`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            is simply dummy text of the printing and typesetting industry.
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              $50
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    )
  })
}


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <FilterBar page="Home">
        <Grid container spacing={2}>
          {content(classes)}
        </Grid>
      </FilterBar>
    </>
  );
}

export default Home;