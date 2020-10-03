import React from "react";
import { Grid } from "@material-ui/core";
import cx from "classnames";
import CardInfo from "./CardInfo";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardInfo
          value={confirmed.value}
          date={new Date(lastUpdate).toDateString()}
          classes={cx(styles.card, styles.infected)}
          status="Infected"
          desc="Number of active cases of COVID-19"
        />

        <CardInfo
          value={recovered.value}
          date={new Date(lastUpdate).toDateString()}
          classes={cx(styles.card, styles.recovered)}
          status="Recovered"
          desc="Number of recoveries from COVID-19"
        />

        <CardInfo
          value={deaths.value}
          date={new Date(lastUpdate).toDateString()}
          classes={cx(styles.card, styles.deaths)}
          status="Deaths"
          desc="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
