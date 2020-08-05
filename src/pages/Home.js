import React from "react";
import { Card, makeStyles, CardMedia } from '@material-ui/core';
import Layout from '../components/Layout';
import headerImage from '../assets/header-image2.jpg'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 500,
  },
});
const Home = () => {

  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.root}>
      <CardMedia
          className={classes.media}
          image={headerImage}
          alt="Header Image"
        />
      </Card>
    </Layout>
  );
}

export default Home;