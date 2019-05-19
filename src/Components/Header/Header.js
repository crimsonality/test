import React, { Component } from 'react';
import Navbar from './Navbar';
import SocialIcon from './SocialIcon';
import LazyImage from '../LazyImage';
import '../../scss/Header.scss';
import BackgroundImage from '../../assets/img/background.jpg';

class Header extends Component {

   render() {
   return (
   <header>
      <LazyImage src={BackgroundImage} class="img-background"/>
      <div className="social-icon-container">
         <SocialIcon link="https://www.instagram.com/crimsonality/" name="instagram"/>
         <SocialIcon link="https://www.facebook.com/jiwizzle" name="linkedin"/>
         <SocialIcon link="https://www.linkedin.com/in/kimjiwoo" name="facebook"/>
         <SocialIcon link="https://github.com/crimsonality" name="github"/>
      </div>
      <Navbar />
   </header>
   );
   }
}

export default Header;
