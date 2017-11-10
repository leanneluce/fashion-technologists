import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return(
      <div className="footer">
        <div className="container-fluid">
          <div className="row">

            <div className="col-xs-6 col-sm-6">
              <p>Website created by <a target="none" href="http://0xeye.com">0xeye</a></p>
            </div>
            <div className="col-xs-6 col-sm-6">
              <p className="float-right">Join us: <a href="https://meetup.com/fashion-technologists">Meetup</a></p>
            </div>

          </div>
        </div>
      </div>
    );
  }

}
