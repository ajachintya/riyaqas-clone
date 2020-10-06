import React, { Component } from 'react'
import classes from "./Header.module.css";
import photo from '../../assets/images/Screenshot (28).png';

export default class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <img src={photo} alt="logo"></img>
            </div>
        )
    }
}
