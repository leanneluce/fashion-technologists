import React, { Component } from 'react';

import SubscribePage from './components/newsletter';
import SimpleMap from './components/maps';
import NextEvent from './components/next-event';

export default class Home extends Component {

  render() {
    return(
      <div id="home">
        <p className="text-center uppercase next gray"> Attend our next event </p>
        <div id="hero">
          <div className="hero-img-wrap">
            <img className="img-responsive" src={process.env.PUBLIC_URL + '/img/RedefiningWearables2e.jpeg'} alt="panel discussion at FiSF" />
          </div>
        </div>
        <NextEvent />
        <SubscribePage />
      </div>
    );
  }

}
