import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SubscribePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }

    render() {
        return (
          <div className="newsletter-signup">
            <div className="container-fluid">
              <div className="row">

                <div className="col-sm-6 col-xs-12">
                  <h2>Join the Conversation</h2>
                  <p>Sign up for updates about our events!</p>
                </div>

                <div className="col-sm-6 col-xs-12">
                  <Form action="https://thefashionrobot.us13.list-manage.com/subscribe/post?u=0d445ed8962752de78c35e41b&amp;id=407771cf90" id="mc-embedded-subscribe-form" method="POST" noValidate>
                    <FormGroup className="newsletter-text">
                      <input type="hidden" name="u" value="0d445ed8962752de78c35e41b"/>
                      <input type="hidden" name="id" value="407771cf90"/>
                      <label className="inline" forHtml='MERGE0'>
                          <Input
                              type="email"
                              name="EMAIL"
                              placeholder="Your Email Address"
                              id="MERGE0"
                              value={this.state.emailValue}
                              onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                              autoCapitalize="off"
                              autoCorrect="off"
                           />
                      </label>

                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-primary"/>

                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                          <label htmlFor="b_name">Name: </label>
                          <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                          <label htmlFor="b_email">Email: </label>
                          <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                          <label htmlFor="b_comment">Comment: </label>
                          <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                      </div>
                    </FormGroup>
                  </Form>
                </div>

              </div>
            </div>
          </div>
        )
    }
}
