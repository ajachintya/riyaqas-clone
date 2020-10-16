import React from 'react'
import photo from '../../assets/images/logo.jpg';
import bg from "../../assets/images/bg.jpg";
import classes from './RequestDemo.module.css';
import { Button } from '@material-ui/core';

export default function RequestDemo() {
    return (
      <div className={classes.Request}>
        <div>
        <img src={photo} alt="logo"></img>
        </div>
        <div>
          <h1>Why settle for less when you can have so much more!</h1>
          <Button variant="contained" color="primary" disableElevation>
            Request A Demo
          </Button> <br/>
          <img scr={bg} alt="pto" />
        </div>
      </div>
    );
}
