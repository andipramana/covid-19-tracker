import React from "react";
import { Card, Typography, Grid, CardContent } from "@material-ui/core";
import CountUp from "react-countup";

const CardInfo = ({ value, date, status, desc, classes }) => {
  if (!value) {
    return "Loading...";
  }

  return (
    <React.Fragment>
      <Grid item component={Card} xs={12} md={3} className={classes}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {status}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={value} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary">{date}</Typography>
          <Typography variant="body2">{desc}</Typography>
        </CardContent>
      </Grid>
    </React.Fragment>
  );
};

export default CardInfo;
