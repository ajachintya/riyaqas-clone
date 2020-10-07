import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (28).png';
import Neviagtion from './Navigation/Navigation';



export default class Header extends Component {
    render() {
        var headClass = [classes.Header];
        if(this.props.stickey === true){
          headClass.push(classes.stickey);
        }

        headClass = headClass.join(' ');

        return (
          <div className={headClass}>
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
        );
    }
}
