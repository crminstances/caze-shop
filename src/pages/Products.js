import React from "react";
import FilterBar from "../components/FilterBar"
import {Grid} from '@material-ui/core';

function Products() {
  return (
    <>
      <FilterBar page="Products">
        <Grid container spacing={2}>
          
        </Grid>
      </FilterBar>
    </>
  );
}

export default Products;