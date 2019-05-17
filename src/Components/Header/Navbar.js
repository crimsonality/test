import React, { Component } from 'react';
import '../../scss/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
