import React from 'react';
import classes from './Intro.module.css';

const Intro = (props) => {
    return (
      <div className={classes.intro}>
        <div className={classes.introContent}>
          With everything going on with Covid-19,{" "}
          <b style={{ color: "#F7CA39" }}>Videoconferencing</b> has now become
          de rigueur for work and social life. So, we decided to provide you
          with virtual events so successful you may never go back!
        </div>
      </div>
    );
}

export default Intro;