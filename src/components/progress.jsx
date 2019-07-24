import React, { Component } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_LEAGUE_API_KEY;

class Progress extends Component {
  state = {
    rank: "",
    lp: "",
    tier: ""
  };

  componentDidMount() {
    axios
      .get("/api/getprogress", {
        headers: {
          apiKey: apiKey
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          rank: res.data.rank,
          lp: res.data.lp,
          tier: res.data.tier
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          Rank: {this.state.tier} {this.state.rank} {this.state.lp} LP
        </div>
      </div>
    );
  }
}

export default Progress;
