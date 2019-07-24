import React, { Component } from "react";
import moment from "moment";

class Timer extends Component {
  state = {
    remainingTime: ""
  };

  componentDidMount() {
    this.interval = setInterval(this.updateRemainingTime, 100);
  }

  updateRemainingTime = () => {
    let now = moment(new Date());
    let end = moment("2019-08-17");
    let duration = moment.duration(now.diff(end));
    let hours = duration.asHours();
    this.setState({
      remainingTime: hours
    });
  };

  render() {
    return (
      <div>
        <h1>Remaining Time to Complete Challenge:</h1>
        <h1>{this.state.remainingTime}</h1>
      </div>
    );
  }
}

export default Timer;
