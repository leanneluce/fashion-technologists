import React, { Component } from 'react';

import PastEvents from './components/past-events';
import EventList from './components/event-list';
import SubscribePage from './components/newsletter';

export default class Events extends Component {

  render() {
    return(
      <div>
        <EventList />
        <PastEvents />
        <SubscribePage />
      </div>
    );
  }

}
