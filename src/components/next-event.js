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

export default class NextEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eventdata: [],
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('https://api.meetup.com/fashion-technologists/events?photo-host=public&page=20&sig_id=150556582&sig=031677cfba08406768204550e80224672dd6bc77')
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

      return (
        <div id="next-event" className="caption">
          <p className="text-center uppercase">{strDate} at { hour }:{ minute }</p>
          <a href="/events"><h1 className="text-center">{event.name}</h1></a>

          <div className="text-center">
            <br />
            <a href={event.link} target="none" className="btn btn-primary">RSVP on Meetup!</a>
            <br />
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
