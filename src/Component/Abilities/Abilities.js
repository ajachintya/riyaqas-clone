import React from 'react'
import classes from './Abilities.module.css';
import img from '../../assets/images/Screenshot (34).png'
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.png';
import img6 from '../../assets/images/6.png'
import Cards from './Cards/Cards'

export default function WhyUs() {
    return (
      <div className={classes.WhyUs}>
        <h1>PrincetonTV Abilities</h1>
        <div className={classes.Cards}>
          <Cards
            title="Security"
            photo={img}
            para="Secure access to all conferences"
          />
          <Cards
            title="Frequency Adjust"
            photo={img2}
            para="Adaptive frequency management"
          />
          <Cards
            title="Live Stream"
            photo={img3}
            para="Can be streamed from all devices."
          />
          <Cards
            title="Screen Share"
            photo={img4}
            para="Share your screen easily during the conference"
          />
          <Cards
            title="Recording"
            photo={img5}
            para="Easy recording of webinars"
          />
          <Cards
            title="Scheduling"
            photo={img6}
            para="Scheduling virtual conferences was never this easy"
          />
        </div>
      </div>
    );
}
