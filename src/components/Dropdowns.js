import React from "react";
import Dropdown from "./Dropdown";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  body: {   
    flexDirection: "row",
    paddingTop: "20px",
    justifyContent: 'center',
    alignItems: 'center'
  },
});
const Dropdowns = () => {
    const classes = useStyles();
  return (
    <div className={classes.body}>
      <Dropdown title="Planogram" />
      <Dropdown title="Category" />
      <Dropdown title="Price" />
      <Dropdown title="Stars" />
      <Dropdown title="Active" />
      <Dropdown title="Attributes" />
      <Dropdown title="Use" />
    </div>
  );
};

export default Dropdowns;
