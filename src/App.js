import React, {Component} from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import './App.css';
import ServiceComponent from './Component/ServiceComponent/ServiceComponent';
import ClientSay from './Container/ClientSay/ClientSay';
import NewsLatter from './Component/NewsLatter/NewsLatter';

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
        <Header stickey={this.state.stickey}/>
        <ServiceComponent />
        <ClientSay />
        <NewsLatter />
        <Footer />
      </div>
    );
  }
}

export default App;
