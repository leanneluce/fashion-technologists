import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import { Media } from 'reactstrap';

import SubscribePage from './components/newsletter';

var proxyUrl4 = 'https://cors-anywhere.herokuapp.com/',
    targetUrl4 = 'https://api.meetup.com/fashion-technologists?photo-host=public&sig_id=150556582&sig=c6b4831b735ac0e743f44a07dca0edfdcbdb9a5f';

export default class AboutUs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      aboutdata: {},
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(proxyUrl4 + targetUrl4)
      .then(results => {
        return results.json();
      }).then((data) => {
        this.setState({aboutdata: data});
      });
  }

  render() {
    console.log(this.state.v);
    var about = () => {

      return (
        <div className="body">
          <h1 className="text-center">{this.state.aboutdata.name}</h1>
          <h4 className="text-center"><strong>{this.state.aboutdata.members}</strong> Members</h4>
          <div className="container" id="event-page">
              <div className="social-share text-center gray">
                <p className="uppercase">Share this site</p>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://fashion-technologists.com"><i className="ion ion-social-facebook text-primary"></i></a>&nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/home?status=https://fashion-technologists.com"><i className="ion ion-social-twitter text-primary"></i></a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://fashion-technologists.com"><i className="ion ion-social-linkedin text-primary"></i></a>
              </div>

              <p className="text-center">Based in <strong>{this.state.aboutdata.city}, {this.state.aboutdata.state}</strong></p>
              <p className="text-center">This group was founded by <a href="https://thefashionrobot.com">Leanne Luce</a> in 2017.</p>
              <div dangerouslySetInnerHTML={{__html: this.state.aboutdata.description}}></div>

              <div id="team">
                <p className="uppercase text-center gray">Meet the Team</p>
                <hr />
                <br />
                <div className="row">
                  <div className="col-sm-3">
                    <img width="100%" src={process.env.PUBLIC_URL + '/img/2017-Leanne-Luce.jpg'} className="img-responsive" alt="headshot of Leanne Luce" title="headshot of Leanne Luce"/>
                  </div>
                  <div className="col-sm-9">
                    <h3 className="text-primary">Leanne Luce</h3>
                    <p className="text-left">Leanne Luce is a designer and technologist who builds wearable systems and innovative manufacturing processes.  After graduating from Rhode Island School of Design (RISD), she focused her career around the intersection of fashion and technology.  Leanne has worked at Harvard University and Otherlab on the development of soft actuators and human interfaces for state of the art exoskeleton devices.</p>
                  </div>
                </div>
                <br /><br />
                <div className="row">
                  <div className="col-sm-3">
                    <img width="100%" src={process.env.PUBLIC_URL + '/img/christian.jpeg'} className="img-responsive" alt="headshot of Christian Martin" title="headshot of Christian Martin"/>
                  </div>
                  <div className="col-sm-9">
                    <h3 className="text-primary">Christian Martin</h3>
                    <p className="text-left">Christian is the CEO of IoT 4 Style. He is a Business Dev & Research Strategist in Technologies for Fashion, Beauty & Retail experiences.</p>
                  </div>
                </div>
              </div>
          </div>
          <SubscribePage />
        </div>
      )

    };
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.aboutdata) return <p>Loading...</p>
    return (
      <div>
        {about()}
      </div>
    )
  }

}
