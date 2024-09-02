import { Component } from "react";
import "./banner.scss";

class Banner extends Component {
  state = {};

  render() {
    return (
      <div className="banner">
        <div className="banner__text">
          New comics every week!
          <br />
          Stay tuned!
        </div>
      </div>
    );
  }
}

export default Banner;
