import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'blue', padding: '.7em',
    textAlign: 'center', fontFamily: 'Calluna', fontSize: '14px', borderRadius: '4px',
    height: 40, width: 160, top: -40, left: -160
  }}>
    {text}
  </div>
);
const mapOptions = {
  styles: [
    {elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},
    {elementType: 'labels.icon', stylers: [{visibility: 'off'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f5f5'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#0000ff'}]},
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#bdbdbd'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#ffffff'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#dadada'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#c9c9c9'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    }
  ]
};

let header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'multipart/form-data'
});

var myInit = { method: 'GET',
               mode: 'cors',
               header: header,
               cache: 'default' };

export default class EventList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventdata: [],
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('https://api.meetup.com/fashion-technologists/events?photo-host=public&page=20&sig_id=150556582&sig=031677cfba08406768204550e80224672dd6bc77', myInit)
      .then(results => {
        return results.json();
      }).then((data) => {
        this.setState({eventdata: data});
      });
  }

  render() {
    console.log(this.state.eventdata);
    var events = this.state.eventdata.map((event) => {

      var facebookShare = ("https://www.facebook.com/sharer/sharer.php?u=" + event.link)
      var twitterShare = ("https://twitter.com/home?status=" + event.link)
      var linkedinShare = ("https://www.linkedin.com/shareArticle?mini=true&url=" + event.link + "&title=" + event.name + "&summary=&source=")

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

      var latitude = event.venue.lat
      var longitude = event.venue.lon
      var center = { lat: event.venue.lat , lng: event.venue.lon }
      var googleurl = ('https://www.google.com/maps?f=q&hl=en&q=' + event.venue.address_1 + ',' + event.venue.city + ',' + event.venue.state + ',' + event.venue.country )
      var googledir = (<a target="none" className="googledir" href={googleurl}>{event.venue.name}</a>)


      return (
        <div className="body">
          <p className="text-center uppercase">{strDate} at { hour }:{ minute }</p>
          <h1 className="text-center">{event.name}</h1>

          <div className="text-center">
            <br />
            <a href={event.link} target="none" className="btn btn-primary">RSVP on Meetup!</a>
            <br />
          </div>

          <div className="container" id="event-page">
            <hr />
              <div className="social-share text-center gray">
                <p className="uppercase">Share this event</p>
                <a href={ facebookShare }><i className="ion ion-social-facebook text-primary"></i></a>&nbsp;&nbsp;&nbsp;
                <a href={ twitterShare }><i className="ion ion-social-twitter text-primary"></i></a>&nbsp;&nbsp;
                <a href={ linkedinShare }><i className="ion ion-social-linkedin text-primary"></i></a>
              </div>

              <div dangerouslySetInnerHTML={{__html: event.description}}></div>

              <div className="text-center">
                <br />
                <a href={event.link} target="none" className="btn btn-primary btn-lg">RSVP on Meetup!</a>
                <br />
              </div>

            </div>

            <div id="location-all">
              <p className="uppercase text-center gray">Location</p>
              <div id="map">
                 <GoogleMapReact options={mapOptions} defaultZoom={14} defaultCenter={center}>
                  <AnyReactComponent
                    lat={latitude}
                    lng={longitude}
                    text={googledir}
                  />
                </GoogleMapReact>
              </div>
              <div id="location-details">
                <p className="text-center">
                 <h4 id="googledir-body">{googledir}</h4>
                 {event.venue.address_1} <br />
                 {event.venue.city}, {event.venue.state} <br />
                </p>
              </div>
            </div>
        </div>
      )

    });
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.eventdata) return <p>Loading...</p>
    return (
      <div>
        {events}
      </div>
    )
  }

}