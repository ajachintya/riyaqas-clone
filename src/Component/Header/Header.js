import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (31).png';
import Neviagtion from './Navigation/Navigation';
import "font-awesome/css/font-awesome.min.css";
import { Button } from '@material-ui/core';


export default class Header extends Component {
  state = {
    dropdown: false
  }

  hamToCrossHandler = () => {
    var val = this.state.dropdown;
    this.setState({dropdown: !val});
  }

  render() {
    var headClass = [classes.Header];
    if (this.props.stickey === true) {
      headClass.push(classes.stickey);
    }

    headClass = headClass.join(" ");
    var droplistClass = [classes.droplist];
    var dropicon = <i id={classes.ham} class="fa fa-bars" onClick={this.hamToCrossHandler}></i>
    if(this.state.dropdown){
      droplistClass.push(classes.show);
      dropicon = <i id={classes.ham} class="fa fa-times" onClick={this.hamToCrossHandler}></i>
    }

    droplistClass = droplistClass.join(" ");
    

    return (
      <div className={headClass}>
        <div className={classes.Navlogo}>
          <div>
            <img className={classes.img} src={photo} alt="logo"></img>
          </div>
          {dropicon}
          <div className={droplistClass}>
            <Neviagtion name="Product" droplist="true"/>
            <Neviagtion name="Pricing" droplist="true"/>
            <Neviagtion name="OurStory" droplist="true"/>
            <Neviagtion name="SignIn" droplist="true"/>
            <div className={classes.btnContain}>
                <Button id={classes.Button} variant="contained">
                  Request A Demo
                </Button>
            </div>
          </div>
          <div className={classes.div}>
            <Neviagtion name="Product" />
            <Neviagtion name="Pricing" />
            <Neviagtion name="OurStory" />
            <Neviagtion name="SignIn" />
            <Button id={classes.Button} variant="contained">
              Request A Demo
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
