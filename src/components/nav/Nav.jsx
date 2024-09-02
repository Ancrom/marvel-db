import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/">Characters</NavLink>
          </li>
          <span>&nbsp;/&nbsp;</span>
          <li className="nav__item">
            <NavLink to="/comics" onClick={this.props.resetScroll}>
              Comics
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
