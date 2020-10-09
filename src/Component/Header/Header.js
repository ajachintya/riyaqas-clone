import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (31).png';
import Neviagtion from './Navigation/Navigation';
import "font-awesome/css/font-awesome.min.css";
import { Button } from '@material-ui/core';


export default class Header extends Component {
  hamToCrossHandler = () => {

  }

  render() {
    var headClass = [classes.Header];
    if (this.props.stickey === true) {
      headClass.push(classes.stickey);
    }

    headClass = headClass.join(" ");

    return (
      <div className={headClass}>
        <div className={classes.Navlogo}>
          <div>
            <img className={classes.img} src={photo} alt="logo"></img>
          </div>
          <div className={classes.div}>
            <Neviagtion name="Product" />
            <Neviagtion name="SignIn" />
            <Button id={classes.Button} variant="contained" color="secondary">
              Secondary
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
