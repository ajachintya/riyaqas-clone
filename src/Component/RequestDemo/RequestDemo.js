import React from 'react'
import photo from '../../assets/images/pixels.jpg';
import classes from './RequestDemo.module.css';
import { Button } from '@material-ui/core';

export default function RequestDemo() {
    return (
      <div className={classes.Request}>
        <div className={classes.second}>
          <div className={classes.img} style={{backgroundImage: `url(${photo})`,backgroundSize: 'cover'}}>
            {/* <img src={photo1} alt="logo"></img> */}
          </div>
          <div className={classes.div2}>
            <div>
              <h1 style={{marginTop:"0px"}}>Why settle for less when you can have so much more!</h1>
            </div>
            <div>
              <Button style={{marginTop:"25px",width: "250px",padding: "10px 20px",fontSize: '1.2rem'}} variant="contained" color="primary" disableElevation>
                Request A Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}
