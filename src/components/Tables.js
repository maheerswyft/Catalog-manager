import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Data from "../apis/products_fields.json";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });

const useStyles = makeStyles({
  table_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  header_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#000000",
  }
});

const Tables = () => {
  const classes = useStyles();
  return (
    <div className={classes.table_container}>
      <ThemeProvider theme={darkTheme}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead >
              <TableRow style={{ background: "#F8F8F9" }}>
                <TableCell className={classes.header_text}>Name</TableCell>
                <TableCell align="left" >Type</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Mandatory</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell >
                    {row.Name}
                  </TableCell>
                  <TableCell align="leftt">{row.Type}</TableCell>
                  <TableCell align="left">{row.Description}</TableCell>
                  <TableCell align="left">{row.Mandatory}</TableCell>
                  <TableCell
                    align="left"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Edit
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
};

export default Tables;
