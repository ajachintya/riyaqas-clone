import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (28).png';
import Neviagtion from './Navigation/Navigation';
import "font-awesome/css/font-awesome.min.css";


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
          <img className={classes.img} src={photo} alt="logo"></img>
          <div className={classes.div}>
            <Neviagtion name="Home" />
            <Neviagtion name="Shop" />
            <Neviagtion name="Blog" />
            <Neviagtion name="Pages" />
            <Neviagtion name="Career" />
            <Neviagtion name="Contact" />
          </div>
        </div>
        <div className={classes.Icon}>
          <i class="fa fa-search" aria-hidden="true"></i>
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <i
            id={classes.Dropdown}
            onClick={this.hamToCrossHandler}
            class="fa fa-bars"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  }
}
