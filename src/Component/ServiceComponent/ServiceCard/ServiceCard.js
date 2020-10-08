import React from 'react';
import './ServiceCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = (props) => {
    return(
        <div className="serviceCard" data-aos="flip-up" data-aos-duration="1200">
            <img className="cardImg" src={props.img} alt="Checklist"/>
            <div className="cardHeading">
                {props.heading}
            </div>
            <div className="cardContent">
                {props.content}
            </div>
            <div className="cardArrow">
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
        </div>
    );
}

export default ServiceCard;