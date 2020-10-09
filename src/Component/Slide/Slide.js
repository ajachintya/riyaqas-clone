import React from 'react';
import classes from './Slide.module.css';

const Slider = (props) => {
    var slide = [];
    if(props.slide === 0){
        slide.push(classes.slide1);
    }else if(props.slide === 1){
        slide.push(classes.slide2);
    }else{
        slide.push(classes.slide3);
    }
    slide = slide.join(' ');

    return (
        <div className={slide}>
            <div className={classes.slideContent}>
                <div className={classes.slideHead}>
                    {props.heading}
                </div>
                <div className={classes.slideText}>
                    {props.text}
                </div>
            </div>
            <div style={{ backgroundImage: `url(${props.slideImg})`,backgroundSize: 'cover' }} className={classes.slideImg}>

            </div>
        </div>     
    );
}

export default Slider;