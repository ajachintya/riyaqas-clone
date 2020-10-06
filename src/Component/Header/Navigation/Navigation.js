import React, { Component } from 'react'
import classes from './Navigation.module.css';
export default class Navigation extends Component {
    render(props) {
        return (
          <div className={classes.Nevigation}>
            {this.props.name}
          </div>
        );
    }
}
