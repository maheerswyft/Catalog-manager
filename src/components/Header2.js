import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  header_container: {
    background: "#FFFFFF",
    padding: '10px',
    margin: 1,
    borderRadius: 10
  },
  title: {
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "33px",

    color: "#000000",
    paddingRight: 30
  },
  import_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",

    color: "#000000",
    paddingRight: "15px",
    textDecorationLine: 'underline'
  }
});

export default function Header2() {
  const classes = useStyles();
  return (
    <Box className ={classes.header_container} sx={{ flexGrow: 1 }}>
        <Toolbar>
          <div
            className={classes.title}
          >
            Apple Airpods 2nd GEN
          </div>
          <div className={classes.import_text} component="div">
            Edit
          </div>
          <div className={classes.import_text} component="div">
            Archive
          </div>
        </Toolbar>
    </Box>
  );
}
