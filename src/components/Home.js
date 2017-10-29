import React, { Component } from "react";
import axios from "axios";
import clockwork from "clockwork";
import User from "./User";

const key = clockwork({ key: "ac27a65a60f8cbe8b5ed2efeabca6cf1c007dbc1" });
// const latitude = `53.47` + Math.round(Math.random() * 10000).toString();
// const longititude = `-2.24` + Math.round(Math.random() * 10000).toString();

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitRed = this.handleSubmitRed.bind(this);
    this.handleSubmitOrange = this.handleSubmitOrange.bind(this);
    this.handleSubmitYellow = this.handleSubmitYellow.bind(this);
    this.sendAlert = this.sendAlert.bind(this);
    this.handleSimulateBombs = this.handleSimulateBombs.bind(this);
    this.handleSimulateVehicleAttack = this.handleSimulateVehicleAttack.bind(
      this
    );
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
      },
      toggleInfo: false,
      info: ""
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
        {this.state.toggleInfo ? (
          <p>
            {this.state.user.userid}, you just reported a{" "}
            {this.state.user.threatlevel} level threat. Please be safe until
            emergency services reach you.
          </p>
        ) : null}
        <div>
          <br />
          <br />
          <button
            onClick={this.handleSimulateBombs}
            value="yellow"
            className="button is-large is-primary  is-fullwidth"
          >
            SIMULATE BOMB ATTACKS
          </button>
          <br />
          <br />
          <button
            onClick={this.handleSimulateVehicleAttack}
            value="yellow"
            className="button is-large is-primary  is-fullwidth"
          >
            SIMULATE VEHICLE ATTACK
          </button>
        </div>
      </div>
    );
  }

  sendAlert(threatlevel, userid, lat, lon) {
    // const Content = {
    //   threatlevel,
    //   userid,
    //   Location: {
    //     lat,
    //     lon
    //   }
    // };
    const sms = `${userid} just reported a '${threatlevel}' level threat. Their location is latitude: ${lat}, longitude: ${lon}`;
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
        // key.sendSms({ To: "447949889991", Content: sms }, (error, resp) => {
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
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +lat,
      lon: +lon
    };
    this.setState({
      user,
      toggleInfo: true
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }

  handleSubmitOrange(threatlevel, userid, lat, lon) {
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +lat,
      lon: +lon
    };
    this.setState({
      user,
      toggleInfo: true
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }

  handleSubmitYellow(threatlevel, userid, lat, lon) {
    const user = {
      threatlevel: threatlevel,
      userid: userid,
      lat: +lat,
      lon: +lon
    };
    this.setState({
      user,
      toggleInfo: true
    });
    this.sendAlert(threatlevel, userid, lat, lon);
  }

  handleSimulateBombs(event) {
    event.preventDefault();
    //Generate a sequence of simulated high alerts over time in 3 distinct locations from multiple users
    for (let i = 0; i < 150; i++) {
      setTimeout(function() {
        let lats = [53.477131, 53.468, 53.485];
        let lons = [-2.254062, -2.23, -2.28];
        let whichAttack = Math.round(Math.random() * 2);
        let whichUser =
          "user" +
          (100 * Math.round(Math.random() * 2) +
            Math.round(Math.random() * 10));
        let payload = {
          userid: whichUser,
          lat: lats[whichAttack] + (Math.random() - 0.5) / 500,
          lon: lons[whichAttack] + (Math.random() - 0.5) / 500,
          threatlevel: "high",
          timestamp: Date.now()
        };
        console.log(payload);
        axios
          .post("http://localhost:3050/reportthreat", payload)
          .then(response => {
            //console.log(response);
          })
          .catch(error => {
            //console.log(error);
          });
      }, i * 100);
    }
  }

  handleSimulateVehicleAttack(event) {
    event.preventDefault();
    let lats = [53.47448, 53.484568];
    let lons = [-2.251736, -2.245385];
    //Generate a sequence of simulated high alerts over time in 3 distinct locations from multiple users
    for (let i = 0; i < 150; i++) {
      setTimeout(function() {
        let whichUser =
          "user" +
          (100 * Math.round(Math.random() * 2) +
            Math.round(Math.random() * 10));
        let payload = {
          userid: whichUser,
          lat:
            lats[0] +
            (lats[1] - lats[0]) * i / 150.0 +
            (Math.random() - 0.5) / 1000,
          lon:
            lons[0] +
            (lons[1] - lons[0]) * i / 150.0 +
            (Math.random() - 0.5) / 1000,
          threatlevel: Math.random() > 0.3 ? "high" : "medium",
          timestamp: Date.now()
        };
        console.log(payload);
        axios
          .post("http://localhost:3050/reportthreat", payload)
          .then(response => {
            //console.log(response);
          })
          .catch(error => {
            //console.log(error);
          });
      }, i * 150);
    }
  }
}

export default Home;
