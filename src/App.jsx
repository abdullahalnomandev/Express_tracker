import { Grid } from "@mui/material";
import React from "react";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyle from './styles';
const App = () => {
  const classes =useStyle()

  return (

      <Grid
      className={classes.grid}
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
            <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>   
          <Details  title='Expense'/>
    
        </Grid>
      </Grid>
 

  );
};

export default App;
