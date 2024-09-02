import { Component } from "react";
import Nav from "../nav/Nav";
import './../../style/container.scss'

import "./appHeader.scss";

class AppHeader extends Component {
  state = {};

  render() {
    return (
      <div className="app-header">
        <div className="app-header__container container">
          <div className="app-header__logo logo">
            <span>Marvel</span>
            <span className="logo__text"> information portal</span>
          </div>
          <Nav {...this.props}/>
        </div>
      </div>
    );
  }
}

export default AppHeader;
