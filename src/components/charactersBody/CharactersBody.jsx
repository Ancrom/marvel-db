import { Component } from "react";
import CharList from "../charList/CharList";
import Description from "../description/Description";

import "./../../style/container.scss";
import "./charactersBody.scss";

class CharactersBody extends Component {
  render() {
    return (
      <div className="characters-body">
        <div className="characters-body__container container">
          <CharList {...this.props} />
          <Description {...this.props} />
        </div>
      </div>
    );
  }
}

export default CharactersBody;
