import React from 'react';
import './ServiceComponent.css';
import ServiceCard from './ServiceCard/ServiceCard';
import ChecklistImg from '../../assets/images/checklist.png'; 

const ServiceComponent = () => {
    return (
        <div>
            <div className="heading">
                What <div style={{display: 'inline',color: '#F9556D'}}>Service</div> We are Providing?
                <div className="subHeading">
                Offer your business with the best assistance for growth.
                </div>
            </div>
            <div className="cardSection">
                <ServiceCard img={ChecklistImg} heading="Branding Idendity" content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."/>
                <ServiceCard img={ChecklistImg} heading="Branding Idendity" content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."/>
                <ServiceCard img={ChecklistImg} heading="Branding Idendity" content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."/>
                <ServiceCard img={ChecklistImg} heading="Branding Idendity" content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."/>
            </div>
        </div>
    );
}

export default ServiceComponent;