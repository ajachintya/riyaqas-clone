import React, {Component} from 'react';
import classes from './Slider.module.css';
import Slide from '../../Component/Slide/Slide';
import SlideImg1 from '../../assets/images/WhatWeDo.jpg';
import SlideImg2 from '../../assets/images/serviceBg-2.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

class Slider extends Component{
    state = {
        slide: 0
    }

    slidePrev = () => {
        var slide = this.state.slide;
        this.setState({slide: (slide+2)%3});
    }
    slideNext = () => {
        var slide = this.state.slide;
        this.setState({slide: (slide+1)%3});
    }

    render() {
        return (
            <div className={classes.slider}>
                <div className={classes.slideShow}>
                    <Slide slide={(this.state.slide)%3} slideImg={SlideImg2} heading="Most Advantage Technology" text="Dummy Text"/>
                    <Slide slide={(this.state.slide+1)%3} slideImg={SlideImg1} heading="Most Advantage Technology" text="A dedicated manager & team of support personnel help manage your virtual conference every step of the way"/>
                    <Slide slide={(this.state.slide+2)%3} slideImg={SlideImg2} heading="Most Advantage Technology" text="Dummy Text"/>
                </div>
                <div className={classes.slideControl}>
                    <button className={classes.slidePrev} onClick={this.slidePrev}>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    </button>
                    <button className={classes.slideNext} onClick={this.slideNext}>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </button>
                </div>
            </div>
        );
    }
}

export default Slider;