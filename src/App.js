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

}

export default App;
