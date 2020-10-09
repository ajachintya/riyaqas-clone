import React from 'react';
import './ServiceComponent.css';
import ServiceCard from './ServiceCard/ServiceCard';
import ChecklistImg from '../../assets/images/checklist.png'; 
import useableImg from '../../assets/images/useable.png';
import supportImg from '../../assets/images/support1.png';
import customiseImg from '../../assets/images/customise.png';
import mlImg from '../../assets/images/ml.png';
import engageImg from '../../assets/images/engage.png';
import secureImg from '../../assets/images/secure.png';

const ServiceComponent = () => {
    return (
        <div className="serviceComponent">
            <div className="heading" data-aos="fade-down" data-aos-duration="1200">
                <div style={{display: 'inline',color: '#F9556D'}}>Easy-To-Use</div> virtual conferencing software
                <div className="subHeading">
                The #1 video platform to enable companies to reach customers, talent, and internal communities globally.
                </div>
            </div>
            <div className="cardSection">
                <ServiceCard img={useableImg} heading="Usablity" content="Simple and Easy to use. User experience across all devices and form factors is consistent"/>
                <ServiceCard img={supportImg} heading="Enthusiastic support" content="A dedicated manager & team of support personnel help manage your virtual conference every step of the way"/>
                <ServiceCard img={customiseImg} heading="Incredibly customizable" content="Fully Customizable to reflect your brand and virtual conference goals."/>
                <ServiceCard img={mlImg} heading="AI and ML" content="Artificial Intelligence (AI) and Machine Learning (ML) tools to build and analyze for smooth operation."/>
                <ServiceCard img={engageImg} heading="Engaging" content="Many engagement options including integration with social media. Decide how much and what type of engagement to turn on."/>
                <ServiceCard img={secureImg} heading="Secure" content="Security is in place and updated constantly."/>
            </div>
        </div>
    );
}

export default ServiceComponent;