import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import AppBar from '@mui/material/AppBar';

const useStyles = makeStyles({
  header_container: {
    background: "#FFFFFF",
    padding: '10px',
    margin: 1
  },
  title: {
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "33px",
    /* identical to box height */

    color: "#000000"
  },
  import_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",

    color: "#000000",
    paddingRight: "15px"
  },
  settings_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000"
  }
});

export default function Header() {
  const classes = useStyles();
  return (
    <Box className ={classes.header_container} sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography
            className={classes.title}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Product Catalog
          </Typography>
          <Typography className={classes.import_text} component="div">
            Import
          </Typography>
          <Typography className={classes.import_text} component="div">
            Export
          </Typography>
          <Typography className={classes.import_text} component="div">
            API
          </Typography>
          <IconButton
            style={{ paddingLeft: "20px" }}
            size="small"
            edge="start"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
          <Typography className={classes.settings_text} component="div">
            Settings
          </Typography>
        </Toolbar>
    </Box>
  );
}
