import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (28).png';
import Neviagtion from './Navigation/Navigation';
export default class Header extends Component {
    render() {
        return (
          <div className={classes.Header}>
            <div className={classes.div}>
              <img className={classes.img} src={photo} alt="logo"></img>
              <Neviagtion name="HOME" />
              <Neviagtion name="SHOP" />
            </div>
          </div>
        );
    }
}