import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { userid } = this.props;
    return (
      <div className="column box">
        <div className="level">
          <h1 className="level-item">
            <strong>{userid}</strong>
          </h1>
        </div>
        <div>
          <button
            onClick={this.handleClick}
            value="red"
            className="button is-large is-danger is-fullwidth"
          >
            HIGH THREAT
          </button>
          <br />
          <br />
          <button
            onClick={this.handleClick}
            value="orange"
            className="button is-large is-warning is-fullwidth"
            backgroundColor="#ff8800"
          >
            MEDIUM THREAT
          </button>
          <br />
          <br />
          <button
            onClick={this.handleClick}
            value="yellow"
            className="button is-large is-primary  is-fullwidth"
          >
            LOW THREAT
          </button>
        </div>
      </div>
    );
  }

  handleClick(event) {
    event.preventDefault();
    let {
      userid,
      lat,
      lon,
      threatlevel,
      handleSubmitOrange,
      handleSubmitRed,
      handleSubmitYellow
    } = this.props;

    lat = (53.477 + (Math.random()-0.5) /100).toString();
    lon = (-2.254 + (Math.random()-0.5) /100).toString();

    if (event.target.value === "red") {
      threatlevel = "high";
      handleSubmitRed(threatlevel, userid, lat, lon);
    } else if (event.target.value === "orange") {
      threatlevel = "medium";
      handleSubmitOrange(threatlevel, userid, lat, lon);
    } else if (event.target.value === "yellow") {
      threatlevel = "low";
      handleSubmitYellow(threatlevel, userid, lat, lon);
    }
  }
}

export default User;
