import React from "react";
import logo from "./logo.svg";
import Twitch from "./components/twitch";
import Timer from "./components/timer";
import LeagueStats from "./components/leaguestats";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
      <LeagueStats />
      <hr />
    </div>
  );
}

export default App;
