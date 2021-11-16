import React from "react";
import Tables from "./Tables";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  body: {
    background: "#333333",
    border: "1px solid rgba(212, 212, 212, 0.5)",
    boxSizing: "border-box",
    /* 3dp/Light */

    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: '40px'
  },
  title_text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "26px",
    lineHeight: "39px",
    /* identical to box height */
    textAlign: "center",

    color: "#FFFFFF",
    paddingTop: "30px",
  },
  description_text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "24px",
    /* identical to box height */
    textAlign: "center",

    color: "#FFFFFF",
    paddingTop: "10px",
    paddingBottom: "20px"
  },
  cancel_button: {},
});

const TableContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <IconButton className={classes.cancel_button} aria-label="Cancel">
        <ClearIcon style={{ color: "white" }} />
      </IconButton>

      <div className={classes.title_text}>Product Display Fields</div>
      <div className={classes.description_text}>
        In order to start building your catalog, we need to define the display
        fields for your GUI. You can use our recommended list of attributes
        below or edit and define your own custom attributes.
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px"
        }}
      >
        <Tables />
      </div>
    </div>
  );
};

export default TableContainer;
