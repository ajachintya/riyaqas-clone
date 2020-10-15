import React, {Component} from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import './App.css';
import Abilities from './Component/Abilities/Abilities';
import ServiceComponent from './Component/ServiceComponent/ServiceComponent';
import ClientSay from './Container/ClientSay/ClientSay';
import NewsLatter from './Component/NewsLatter/NewsLatter';
import Intro from './Component/Intro/Intro';
import WhatWeDo from './Component/WhatWeDo/WhatWeDo';
import Slider from './Container/Slider/Slider';
import SlideShow from './Container/SlideShow/SlideShow';
import SupportedBrowser from './Component/SupportedBrowser/SupportedBrowser';

//Slideshow Assets
import slide1 from './assets/images/slideshow1.jpg';
import slide2 from './assets/images/slideshow2.jpg';
import slide3 from './assets/images/slideshow3.jpg';

class App extends Component{
  state = {
    stickey: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.stickey===this.state.stickey){
      return false;
    }
    return true;
  }

  handleScroll = () => {
    if(window.scrollY === 0){
      this.setState({stickey: false});
      return;
    }
    this.setState({stickey: true});
  }

  render() {
    return (
      <div className="App">
        <Header stickey={this.state.stickey} />
        <Slider height="475px"/>
        <SlideShow 
          heading="Basic Features" 
          slide1={slide1} 
          slide2={slide2} 
          slide3={slide3}
        />
        <ServiceComponent />
        <Intro />
        <WhatWeDo />
        <ClientSay />
        <Abilities />
        <SupportedBrowser />
        <NewsLatter />
        <Footer />
      </div>
    );
  }
}

export default App;
