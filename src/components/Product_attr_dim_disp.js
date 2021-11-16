import React from "react";
import SearchBar from "./SearchBar";
import Grid from "@mui/material/Grid";

const Product_attr_dim_disp = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SearchBar />
            </Grid>
            <Grid item xs={3}>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SearchBar />
            </Grid>
            <Grid item xs={3}>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <SearchBar />
            </Grid>
            <Grid item xs={3}>
              Tags
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          Dimensions
        </Grid>
      </Grid>
    </div>
  );
};

export default Product_attr_dim_disp;
