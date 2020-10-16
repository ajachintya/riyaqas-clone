import React , { Component } from 'react';
import classes from './ClientSay.module.css';
import ClientCard from '../../Component/ClientCard/ClientCard';
import User from '../../assets/images/user.png';
import User2 from '../../assets/images/user2.png';
import User3 from '../../assets/images/user3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

class ClientSay extends Component{
    state = {
        slideNo: 0
    }

    nextSlide = () => {
        var curr = this.state.slideNo;
        this.setState({slideNo: curr+1});
    }

    prevSlide = () => {
        var curr = this.state.slideNo;
        this.setState({slideNo: curr+2});
    }

    render(){
        return (
          <div className={classes.mainClientSay}>
            <div className={classes.clientSay}>
              <div
                className={classes.clientSaySlide}
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <ClientCard
                  slide={this.state.slideNo % 3}
                  user="Refule Mia"
                  designation="CEO at craft"
                  stars="5"
                  content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."
                  userImg={User}
                />

                <ClientCard
                  slide={(this.state.slideNo + 1) % 3}
                  user="John Mojika"
                  designation="CTO of Uxa"
                  stars="4"
                  content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."
                  userImg={User2}
                />

                <ClientCard
                  slide={(this.state.slideNo + 2) % 3}
                  user="Ema Wilson"
                  designation="CEO at craft"
                  stars="3"
                  content="Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests."
                  userImg={User3}
                />
              </div>
              <div
                className={classes.clientSayButton}
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <button onClick={this.prevSlide}>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </button>
                <button onClick={this.nextSlide}>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </button>
              </div>

              <div
                className={classes.clientSayContent}
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div className={classes.clientSayHeading}>
                  <div style={{ display: "inline", color: "#000000" }}>
                    What Our{" "}
                  </div>
                  <div style={{ color: "#B446FF", display: "inline" }}>
                    Client Say?
                  </div>
                </div>
                <div className={classes.clientSayText}>
                  Our support team will get assistance from AI-powered
                  suggestions, making it quicker than ever to handle support
                  requests. assistance from AI-powered
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ClientSay;