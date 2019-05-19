import React, { Component } from 'react';

class LazyImage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loaded: false,
         class: ''
      }
   }



   render() {
      return <img src={this.props.src} className={this.props.class+' '+this.state.class} onLoad={this.onload}/>;
   }

   onload = () => {
      this.setState(() => ({ loaded: true, class: 'img-loaded'}));
   }
}

export default LazyImage;
