import React, {Component} from 'react';
import classes from './SlideShow.module.css';
import Slider from '../Slider/Slider';

class SlideShow extends Component {
    render() {
        return(
            <div>
                <div className={classes.slideShowHead}>
                    {this.props.heading}
                </div>
                <div className={classes.slideShow}>
                    <div className={classes.aside1}>
                        <div style={{backgroundImage:  `url(${this.props.slide1})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide2})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide3})`,backgroundSize: "cover"}}>
                        
                        </div>  
                        <div style={{backgroundImage:  `url(${this.props.slide1})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide2})`,backgroundSize: "cover"}}>
                        
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide3})`,backgroundSize: "cover"}}>
                        
                        </div> 
                    </div>
                    <div className={classes.mainSlide}>
                        <Slider height="560px" slide1={this.props.slide1} slide2={this.props.slide2} slide3={this.props.slide3}/>
                    </div>
                    <div className={classes.aside2}>
                        <div style={{backgroundImage:  `url(${this.props.slide3})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide2})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide1})`,backgroundSize: "cover"}}>
                        
                        </div> 
                        <div style={{backgroundImage:  `url(${this.props.slide3})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide2})`,backgroundSize: "cover"}}>
                            
                        </div>
                        <div style={{backgroundImage:  `url(${this.props.slide1})`,backgroundSize: "cover"}}>
                            
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideShow;