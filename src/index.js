import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';

import AboutUs from './about';
import ContactForm from './contact-form';
import Events from './events';
import EventList from './components/event-list';
import Home from './home';
import Layout from './layout';
import PastEvents from './components/past-events';
import Sponsor from './sponsor';
import SponsorForm from './sponsor-form';

require("bootstrap/dist/css/bootstrap.css");

render((
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={AboutUs}/>
      <Route exact path='/contact' component={ContactForm}/>
      <Route exact path='/events' component={Events}/>
      <Route exact path='/list' component={EventList}/>
      <Route exact path='/past' component={PastEvents}/>
      <Route exact path='/sponsor' component={Sponsor}/>
      <Route exact path='/sponsor-form' component={SponsorForm}/>
    </Layout>
  </BrowserRouter>
), document.getElementById('root'));
