import { Component } from "react";
import spinner from "./../../resources/img/spinner/spinner.svg";
import "./spinner.scss";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }
}

export default Spinner;
