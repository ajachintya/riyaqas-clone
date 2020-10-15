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

    var slideDOM =  <div className={slide}>
                        <div style={{ backgroundImage: `url(${props.slideImg})`,backgroundSize: 'cover',width: '100%' }} className={classes.slideImg}>

                        </div>
                    </div>   
    if(props.heading !== undefined){
        slideDOM =  <div className={slide}>
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
    }

    return (
        <div>
            {slideDOM}
        </div>  
    );
}

export default Slider;