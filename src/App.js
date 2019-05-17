import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }


  componentDidMount(){
      this.lazyloading();
  }

  lazyloading(){
      var element = ReactDOM.findDOMNode(this).getElementsByClassName('lazy');
      setTimeout(function(){
          element[0]["className"] += " loaded";
      });
  }
}

export default App;
