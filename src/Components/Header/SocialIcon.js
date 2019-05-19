import React, { Component } from 'react';
import '../../scss/Header.scss';

class SocialIcon extends Component {

    render() {
    return (
        <a className="social-icon" target="_blank" rel="noopener noreferrer" href={this.props.link}><i className={"fab fa-"+this.props.name+" fa-2x"}></i></a>
    );
    }
}

export default SocialIcon;
