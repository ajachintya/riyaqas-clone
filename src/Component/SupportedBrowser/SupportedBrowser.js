import React from 'react';
import classes from './SupportedBrowser.module.css';
import browser from '../../assets/images/browser.jpg';

const SupportedBrowser = () => {
    return (
        <div className={classes.supportedBrowser} data-aos="fade-in" data-aos-duration="1500">
            <div>
                Supported Browsers
            </div>
            <img src={browser} alt="Supported Browsers"/>
        </div>
    );
}

export default SupportedBrowser;