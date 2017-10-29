import React, { Component } from "react";
import axios from "axios";
import clockwork from "clockwork";
import User from "./User";

const key = clockwork({ key: "ac27a65a60f8cbe8b5ed2efeabca6cf1c007dbc1" });
const latitude = `53.47` + Math.round(Math.random() * 10000).toString();
const longititude = `-2.24` + Math.round(Math.random() * 10000).toString();
let info = [];

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitRed = this.handleSubmitRed.bind(this);
    this.handleSubmitOrange = this.handleSubmitOrange.bind(this);
    this.handleSubmitYellow = this.handleSubmitYellow.bind(this);
    this.sendAlert = this.sendAlert.bind(this);
    this.sendText = this.sendText.bind(this);
    this.state = {
      users: [
        {
          userid: "user1",
          lat: 53.477131,
          lon: -2.254062,
          threatlevel: "",
          timestamp: Date.now()
        },
        {
          userid: "user2",
          lat: 53.478284,
          lon: -2.253471,
          threatlevel: "",
          timestamp: Date.now()
        },
        {
          userid: "user3",
          lat: 53.477374,
          lon: -2.254319,
          threatlevel: "",
          timestamp: Date.now()
        },
        {
          userid: "user4",
          lat: 53.477221,
          lon: -2.256545,
          threatlevel: "",
          timestamp: Date.now()
        }
      ],
      user: {
        userid: "",
        lat: 0,
        lon: 0,
        threatlevel: "",
        timestamp: Date.now()
      }
    };
  }

  render() {
    return (
      <div>
        <div className="columns">
          {this.state.users.map(user => (
            <User
              key={user.userid}
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
        {info.map(details => {
          <p>Hello {details.threatlevel}</p>;
        })}
      </div>
    );
  }

  sendText() {
    // key.sendSms({ To: "447949889991", Content: "Test!" }, (error, resp) => {
    //   if (error) {
    //     console.log("Something went wrong", error);
    //   } else {
    //     console.log("Message sent", resp.responses[0].id);
    //   }
    // });
  }

  sendAlert(threatlevel, userid, lat, lon) {
    const Content = {
      threatlevel,
      userid,
      Location: {
        lat,
        lon
      }
    };
    axios
      .post("http://localhost:3050/reportthreat", {
        userid: userid,
        lat: lat,
        lon: lon,
        threatlevel: threatlevel,
        timestamp: Date.now()
      })
      .then(response => {
        console.log(response);
        // key.sendSms({ To: "447949889991", Content: JSON.stringify(Content) }, (error, resp) => {
        //   if (error) {
        //     console.log("Something went wrong", error);
        //   } else {
        //     console.log("Message sent", resp.responses[0].id);
        //   }
        // });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmitRed(threatlevel, userid, lat, lon) {
    // const latitude = `53.47` + Math.round(Math.random() * 10000).toString();
    // const longititude = `-2.24` + Math.round(Math.random() * 10000).toString();
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +latitude,
      lon: +longititude
    };
    info.push(user);
    this.setState({
      user
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }

  handleSubmitOrange(threatlevel, userid, lat, lon) {
    // const latitude = `53.47` + Math.round(Math.random() * 10000).toString();
    // const longititude = `-2.25` + Math.round(Math.random() * 10000).toString();
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +latitude,
      lon: +longititude
    };
    this.setState({
      user
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }

  handleSubmitYellow(threatlevel, userid, lat, lon) {
    // const latitude = `53.47` + Math.round(Math.random() * 10000).toString();
    // const longititude = `-2.24` + Math.round(Math.random() * 10000).toString();
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +latitude,
      lon: +longititude
    };
    this.setState({
      user
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }
}

export default Home;
