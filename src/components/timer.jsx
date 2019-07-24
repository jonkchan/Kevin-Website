import React, { Component } from "react";
import moment from "moment";

class Timer extends Component {
  state = {
    duration: ""
  };

  componentDidMount() {
    this.interval = setInterval(this.updateRemainingTime, 100);
  }

  updateRemainingTime = () => {
    let now = moment(new Date());
    let end = moment("2019-08-17");
    // let duration = moment.duration(now.diff(end)).asHours();
    let duration = now.diff(end, "minutes") * -1;

    this.setState({
      duration
    });
  };

  render() {
    return (
      <div>
        <h1>Time Remaining to Complete Challenge:</h1>
        <h1>Minutes: {this.state.duration}</h1>
      </div>
    );
  }
}

export default Timer;
