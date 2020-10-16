import React from 'react'
import classes from './RequestDemo.module.css';
import { Button } from '@material-ui/core';
import photo1 from '../../assets/images/Screenshot (3fsd6).jpg'
import photo2 from "../../assets/images/gabriel-benois-qnWPjzewewA-unsplash.jpg";

export default function RequestDemo() {
    return (
      <div className={classes.Request}>
        <div>
          <img scr={photo1} alt="conference"></img>
        </div>
        <div>
          <h1>Why settle for less when you can have so much more!</h1>
          <Button variant="contained" color="primary" disableElevation>
            Request A Demo
          </Button> <br/>
          <img scr={photo2} alt="pto"></img>
        </div>
      </div>
    );
}
