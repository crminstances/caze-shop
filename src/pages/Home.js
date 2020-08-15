import React from "react";
import FilterBar from "../components/FilterBar"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sampleImage from '../assets/sample-product.jpg';
import Grid from '@material-ui/core/Grid';

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
  let cards = [0,1,2,3,4,5,6,7,8,9,10,11]
  return cards.map((card, key) => {
    return (
      <Grid item lg={4} sm={12} key={key}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={sampleImage}
            title="Contemplative Reptile"
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
      <FilterBar>
        <Grid container spacing={2}>
          {content(classes)}
        </Grid>
      </FilterBar>
    </>
  );
}

export default Home;