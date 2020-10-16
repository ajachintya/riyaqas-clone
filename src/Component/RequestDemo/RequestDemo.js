import React from 'react'
import photo1 from '../../assets/images/pexels-anna-shvets-4226263 (2).jpg';
import photo2 from "../../assets/images/gabriel-benois-qnWPjzewewA-unsplash (1).jpg";
import classes from './RequestDemo.module.css';
import { Button } from '@material-ui/core';

export default function RequestDemo() {
    return (
      <div className={classes.Request}>
        <div style={{textAlign:"center"}}>
          <h1>Request A Demo</h1>
        </div>
        <div className={classes.second}>
          <div className={classes.img}>
            <img src={photo1} alt="logo"></img>
          </div>
          <div className={classes.div2}>
            <h1 style={{marginTop:"0px"}}>Why settle for less when you can have so much more!</h1>
            <Button style={{marginTop:"25px"}} variant="contained" color="primary" disableElevation>
              Request A Demo
            </Button>
            <br />
            <div className={classes.img2}>
              <img src={photo2} alt="abc"></img>
            </div>
          </div>
        </div>
      </div>
    );
}
