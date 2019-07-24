import React, { Component } from "react";
import moment from "moment";

class Timer extends Component {
  state = {
    dateDuration: "",
    hourDuration: "",
    minDuration: "",
    secDuration: ""
  };

  componentDidMount() {
    this.interval = setInterval(this.updateRemainingTime, 100);
  }

  updateRemainingTime = () => {
    let now = moment(new Date());
    let end = moment("2019-08-17");
    // let duration = moment.duration(now.diff(end)).asHours();
    let dateDuration = now.diff(end, "days") * -1;
    let hourDuration = now.diff(end, "hours") * -1;
    let minDuration = now.diff(end, "minutes") * -1;
    let secDuration = now.diff(end, "seconds") * -1;

    this.setState({
      dateDuration,
      hourDuration,
      minDuration,
      secDuration
    });
  };

  render() {
    return (
      <div>
        <h1>Time Remaining to Complete Challenge:</h1>
        <h3>
          {this.state.dateDuration} Days | {this.state.hourDuration} Hours |{" "}
          {this.state.minDuration} Mins | {this.state.secDuration} Seconds
        </h3>
      </div>
    );
  }
}

export default Timer;
