import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import BoxButton from "./BoxButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  left: {
    display: "flex",
    flexWrap: "wrap",
    width: "25%",
    height: "100vh",
  },
  containLeft: {
    margin: 20,
  },
  buttons: {
    marginTop: 5,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridGap: "15px",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.left}>
        <div className={classes.containLeft}>
          <Typography variant="h5" component="h6" align="center">
            Select Components
          </Typography>
          <Divider />
          <div className={classes.buttons}>
            <BoxButton />
            <BoxButton />
          </div>
        </div>
      </Paper>
    </div>
  );
}
