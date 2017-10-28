import React, { Component } from 'react'

import axios from 'axios';

import User from './User';

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
      <div className='columns'>
        {this.state.users.map((user) => (
          <User key={user.userid}
            userid={user.userid}
            lat={user.lat}
            lon={user.lon}
            threatlevel={user.threatlevel}
            handleSubmitRed={this.handleSubmitRed}
            handleSubmitOrange={this.handleSubmitOrange}
            handleSubmitYellow={this.handleSubmitYellow}
          />
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

  handleSubmitRed(threatlevel, userid, lat, lon) {
    this.setState({
      threatlevel: 'high'
    });
    // this.sendAlert()
  }

  handleSubmitOrange(threatlevel, userid, lat, lon) {
    this.setState({
      threatlevel: 'medium'
    })
    // this.sendAlert()
  }

  handleSubmitYellow(threatlevel, userid, lat, lon) {
    this.setState({
      threatlevel: 'low'
    })
    // this.sendAlert()
  }
}

export default Home;