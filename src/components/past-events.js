import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class PastEvents extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      pasteventdata: [],
      requestFailed: false,
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    fetch('https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=fashion-technologists&status=past&page=20')
      .then(results => {
        return results.json();
      }).then((data) => {
        this.setState({pasteventdata: data.results});
      });
  }

  render() {
    console.log(this.state.pasteventdata);
    var events = this.state.pasteventdata.map((event) => {

      var facebookShare = ("https://www.facebook.com/sharer/sharer.php?u=" + event.event_url )
      var twitterShare = ("https://twitter.com/home?status=" + event.event_url )
      var linkedinShare = ("https://www.linkedin.com/shareArticle?mini=true&url=" + event.event_url + "&title=" + event.name + "&summary=&source=")

      var date = new Date( event.time );
      var year    = date.getFullYear();
      var month   = date.getMonth() + 1;
      var day     = date.getDate();
      var hour    = date.getHours();
      var minute  = date.getMinutes();
      var seconds = date.getSeconds();

      var objDate = new Date('"' + month + '/' + day + '/' + year + '"');

      var strDate =
          objDate.toLocaleString("en", { month: "long"  }) + ' ' +
          objDate.toLocaleString("en", { day: "numeric" }) + ', ' +
          objDate.toLocaleString("en", { year: "numeric"});

      var eventid = ('#' + event.id )

      return (
        <div className="body">
          <div className="container text-center">
            <p className="uppercase">{strDate} at { hour }:{ minute }</p>
            <h3 className="text-primary">{event.name}</h3>
            <Button color="default" onClick={this.toggle}>
              Read More
            </Button>
            <br /><br />

            <Collapse isOpen={this.state.collapse} id={event.id}>
                <Card>
                  <CardBody>
                  <div className="social-share text-center gray">
                    <p className="uppercase">Share this event</p>
                    <a href={ facebookShare }><i className="ion ion-social-facebook text-primary"></i></a>&nbsp;&nbsp;&nbsp;
                    <a href={ twitterShare }><i className="ion ion-social-twitter text-primary"></i></a>&nbsp;&nbsp;
                    <a href={ linkedinShare }><i className="ion ion-social-linkedin text-primary"></i></a>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: event.description}}></div>
                </CardBody>
              </Card>
            </Collapse>

          </div>
        </div>
      )

    });
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.pasteventdata) return <p>Loading...</p>
    return (
      <div className="container">
        <div id="event-page">
          <p className="text-center gray uppercase">Past Events</p>
          <hr />
          <br />
          {events}
          <br />
        </div>
      </div>
    )
  }

}
