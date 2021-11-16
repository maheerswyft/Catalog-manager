import React from "react";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";
import Dropdowns from "../components/Dropdowns";
import TableContainer from "../components/TableContainer";

const useStyles = makeStyles({
  clear_all_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",

    color: "#000000",
    textAlign: "right",
    textDecorationLine: "underline",
    paddingRight: "50px",
    paddingTop: "10px",
    paddingBottom: "50px",
  },
});

const ProductsList = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "white" }}>
      <SearchBar title="search..." width="50%" />
      <Dropdowns />
      <div className={classes.clear_all_text}>Clear all</div>
      <div
        style={{
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 60
        }}
      >
        <TableContainer />
      </div>
    </div>
  );
};

export default ProductsList;
