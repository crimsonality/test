import React, { Component } from 'react';
import Navbar from './Navbar';
import '../../scss/Header.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
     }

    render() {
    return (
        <header className="header-container lazy">
            <div className="social-icon-container">
                <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/crimsonality/"><i className="fab fa-instagram fa-2x"></i></a>
                <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jiwizzle"><i className="fab fa-facebook fa-2x"></i></a>
                <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kimjiwoo/"><i className="fab fa-linkedin fa-2x"></i></a>
                <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/crimsonality"><i className="fab fa-github fa-2x"></i></a>
            </div>
            <Navbar />
        </header>
    );
    }
}

export default Header;
