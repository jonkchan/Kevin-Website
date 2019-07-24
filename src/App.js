import React from "react";
// import logo from "./logo.svg";
import Timer from "./components/timer";
import Progress from "./components/progress";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Timer />
      <Progress />
      <hr />
    </div>
  );
}

export default App;
