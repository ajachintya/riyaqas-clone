import React from 'react';
import './Stickey-nav.css';
import cart from '../../assets/images/cart.png';
import dot from '../../assets/images/dot.png';

const StickeyNav = (props) => {
    return (
        <div className="Stickey-nav">
            <div className="section1 extend">
                <img className="stickeyImg" src={dot} alt="Dot"/>
                <span>CODINGEEK</span>
            </div>
            <div className="section2 extend">
                <img className="stickeyImg" src={cart} alt="Cart"/>
                <span>BUY NOW</span>
            </div>
        </div>
    );
}

export default StickeyNav;