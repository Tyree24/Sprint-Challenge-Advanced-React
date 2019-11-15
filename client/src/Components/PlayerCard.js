import React from "react";
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      width: '50%',
      marginBottom: 30,
      marginTop: 30
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Playercard = ( {player} ) => {

    const classes = useStyles();

    return (
        <Card className={mergeClasses.card}>
        <Typography variant="h5">{player.name}</Typography>
            <Typography className={classes.title} variant="h6" color="textSecondary">{player.country}</Typography>
            <Typography className={classes.title} color="textSecondary">Searches: {player.searches}</Typography>
        </Card>
    );
}

export default Playercard;