import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles({
  search_box: {
    background: "#FFFFFF",

    border: "1px solid #D4D4D4",
    boxSizing: "border-box",
    borderRadius: 20
  },
});
const SearchBar = ({title,width, height}) => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: "30px", paddingLeft: "20px" }}>
      <TextField
        className={classes.search_box}
        id="input-with-icon-textfield"
        placeholder={title}
        style ={{width: width, height: height}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
};

export default SearchBar;
