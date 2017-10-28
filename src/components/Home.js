import React, { Component } from 'react'

import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitRed = this.handleSubmitRed.bind(this);
    this.handleSubmitOrange = this.handleSubmitOrange.bind(this);
    this.handleSubmitYellow = this.handleSubmitYellow.bind(this);
    this.sendAlert = this.sendAlert.bind(this);
    this.state = {
      users: [
        {
        userid: 'user1',
        lat: 53.477131,
        lon: -2.254062,
        threatlevel: '',
        timestamp: Date.now()
      }, {
        userid: 'user2',
        lat: 53.478284,
        lon: -2.253471,
        threatlevel: '',
        timestamp: Date.now()
      }, {
        userid: 'user3',
        lat: 53.477374,
        lon: -2.254319,
        threatlevel: '',
        timestamp: Date.now()
      }, {
        userid: 'user4',
        lat: 53.477221,
        lon: -2.256545,
        threatlevel: '',
        timestamp: Date.now()
      }
    ],

    }
  }

  render() {
    return (
      <div className='container columns'>
        {this.state.users.map((user, i) => (
          <div key={i} className='column box'>
            <h1 className=''>{user.userid}</h1>
            <div className='box'>
              <button onClick={this.handleSubmitRed} className='box'>
                THE RED BUTTON!
             </button>
              <button onClick={this.handleSubmitOrange} className='box'>
                THE ORANGE BUTTON!
            </button>
              <button onClick={this.handleSubmitYellow} className='box'>
                THE YELLOW BUTTON!
            </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  sendAlert() {
    axios.post('http://localhost:3050/reportthreat', {
      userid: 'user1',
      lat: 53.477131,
      lon: -2.254062,
      threatlevel: '',
      timestamp: Date.now()
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmitRed(event) {
    event.preventDefault()
    let user = this.state.user
    this.setState({
      user: Object.assign({}, user, {
        threatlevel: 'high'
      })
    });
    // this.sendAlert()
  }

  handleSubmitOrange(event) {
    event.preventDefault()
    let user = this.state.user
    this.setState({
      user: Object.assign({}, user, {
        userid: this.state.user.userid,
        threatlevel: 'medium'
      })
    });
    // this.sendAlert()
  }

  handleSubmitYellow(event) {
    event.preventDefault()
    let user = this.state.user
    this.setState({
      user: Object.assign({}, user, {
        threatlevel: 'low'
      })
    });
    // this.sendAlert()
  }
}




export default Home;