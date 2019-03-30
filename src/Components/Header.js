import React, { Component } from 'react';
import Navbar from './Navbar';
import '../scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header>
          Header
        </header>
        <Navbar />
      </div>
    );
  }
}

export default Header;
