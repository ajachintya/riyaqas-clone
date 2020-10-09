import React from 'react'
import classes from './WhyUs.module.css';
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
        <h1>Why Us?</h1>
        <div className={classes.Cards}>
          <Cards
            title="Usability"
            photo={img}
            para="Simple and Easy to use. User experience across all devices and form factors is consistent"
          />
          <Cards
            title="Enthusiastic"
            photo={img2}
            para="A dedicated manager & team of support personnel help manage your virtual conference every step of the way"
          />
          <Cards
            title="Incredibly Customizable"
            photo={img3}
            para="Fully Customizable to reflect your brand and virtual conference goals. 
"
          />
          <Cards
            title="AI and ML"
            photo={img4}
            para="Artificial Intelligence (AI) and Machine Learning (ML) tools to build and analyze for smooth operation.
"
          />
          <Cards
            title="Engaging"
            photo={img5}
            para="Many engagement options including integration with social media. Decide how much and what type of engagement to turn on.
"
          />
          <Cards
            title="Secure"
            photo={img6}
            para="Security is in place and updated constantly. "
          />
        </div>
      </div>
    );
}
