import { Component } from "react";
import ComicsBody from "../components/comicsBody/ComicsBody";

class Comics extends Component {
  state = {};

  render() {
    return <ComicsBody {...this.props}/>;
  }
}

export default Comics;
