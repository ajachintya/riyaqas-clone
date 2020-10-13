import React, { Component } from 'react'
import classes from './Navigation.module.css';
export default class Navigation extends Component {
    render(props) {
        var display = <div className={classes.Nevigation}>
                        {this.props.name}
                      </div>;
        if(this.props.droplist){
          display = <div className={classes.dropitem}>
            {this.props.name}
          </div>
        }

        return (
          <div>
            {display}
          </div>
        );
    }
}
