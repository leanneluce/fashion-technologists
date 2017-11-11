import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import SubscribePage from './components/newsletter';

export default class Sponsor extends Component {

     render() {

       return(
         <div className="body">
           <div className="text-center" id="event-page">
            <h1>Thank you to our Sponsors and Collaborators!</h1>
            <p> We couldn't do it without you.</p>
            <div class="row">
              <div className="col-sm-3 sponsor">
              </div>
              <div className="col-sm-3 sponsor">
                <img width="60%" src={process.env.PUBLIC_URL + '/img/FiSF.png'} className="img-responsive" alt="the fashion incubator san francisco - FiSF logo" title="the fashion incubator san francisco - FiSF logo"/>
              </div>
              <div className="col-sm-3 sponsor">
                <img width="60%" src={process.env.PUBLIC_URL + '/img/thefashionrobot.png'} className="img-responsive" alt="headshot of Christian Martin" title="headshot of Christian Martin"/>
              </div>
              <div className="col-sm-3 sponsor">
              </div>
            </div>
            <p> Interested in sponsoring an event?</p>
            <Button className="btn btn-primary" href="/sponsor-form">Become a Sponsor</Button>
            <br /><br /><br />
          </div>
          <SubscribePage />
        </div>

       );
     }
}
