import React from 'react';
import classes from './WhatWeDo.module.css';
import weDoImg from '../../assets/images/WhatWeDo.jpg';

const WhatWeDo = (props) => {
    return (
      <div className={classes.whatWeDo}>
        <div
          className={classes.whatWeDoContent}
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className={classes.whatWeDoHead}>
            What we{" "}
            <div style={{ display: "inline", color: "#F7CA39" }}>DO?</div>
          </div>
          <div className={classes.whatWeDoText}>
            At Princeton Hive, we have put in a lot of thought and effort to
            provide you with a{" "}
            <b>
              simple UI, compréhensive analytics for intelligent engagement.
            </b>
          </div>
        </div>
        <div
          className={classes.whatWeDoImg}
          style={{ backgroundImage: `url(${weDoImg})` }}
          data-aos="flip-left"
          data-aos-duration="1200"
        ></div>
      </div>
    );
}

export default WhatWeDo;