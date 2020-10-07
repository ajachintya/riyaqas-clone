import React from 'react'
import classes from './NewsLatter.module.css';

export default function NewsLatter() {
    return (
      <div className={classes.NewsLatter}>
        <div>
          <h1 className={classes.Heading}>
            Get our latest <spam style={{ color: "#f9556d" }}>Newslatter</spam>
          </h1>
          <p style={{ color: "grey" }}>
            Offer your business with the best assistance for growth.
          </p>
        </div>
        <div className={classes.Search}>          
            <input type="text" placeholder="Your E-mail..." className={classes.Input} />
            <button className={classes.Button} type="submit"> SUBMIT </button>
        </div>
      </div>
    );
}
