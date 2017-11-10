import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import the module (CommonJS shown)
var Wufoo = require('react-wufoo-embed');

export default class ContactForm extends Component {

   render() {

     return(
        <div className="body">
          <div className="container" id="event-page">
            <Wufoo userName="leanneluce" formHash="m194wqd706ynj64" />
          </div>
        </div>

     );
   }
}
