import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import the module (CommonJS shown)
var Wufoo = require('react-wufoo-embed');

export default class SponsorForm extends Component {

   render() {

     return(
        <div className="body">
          <div className="container text-center" id="event-page">
            <Wufoo userName="leanneluce" formHash="zmwepi0uul50f" />
          </div>
        </div>
     );
   }
}
