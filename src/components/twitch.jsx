import React, { Component } from "react";

class Twitch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="twitch-embed" />
        <script src="https://embed.twitch.tv/embed/v1.js" />
        {/* <script type="text/javascript">
          new Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: "monstercat"
          });
        </script> */}
      </React.Fragment>
    );
  }
}

export default Twitch;
