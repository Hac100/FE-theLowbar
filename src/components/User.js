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
        <div className="box">
          <button
            onClick={this.handleClick}
            value="red"
            className="button is-large is-danger"
          >
            <strong>RED ALERT!</strong>
          </button>
          <br />
          <br />
          <br />
          <button
            onClick={this.handleClick}
            value="orange"
            className="button is-warning is-active is-large"
          >
            ORANGE ALERT!
          </button>
          <br />
          <br />
          <br />
          <button
            onClick={this.handleClick}
            value="yellow"
            className="button is-warning is-large"
          >
            YELLOW ALERT!
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
