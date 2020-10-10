import React from 'react'
import classes from './Cards.module.css';
import { Card, CardContent, Typography } from "@material-ui/core";

export default function Cards(props) {
    return (
      <Card className={classes.Card}>
        <CardContent>
          <Typography color="inherit" gutterBottom>
            {props.title}
          </Typography>
          <img src={props.photo} alt="ss" />
          <Typography color="textSecondary" paragraph>
            {props.para}
          </Typography>
        </CardContent>
      </Card>
    );
}
