import React, { Component } from 'react';
import Typekit from 'react-typekit';

import Navigation from './components/nav';
import Footer from './components/footer';
require("./index.css");

export default class Layout extends Component {

  render() {
    return(
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
        <Typekit kitId="nes2fbv" />
      </div>
    );
  }

}
