import { Component } from "react";
import RandomInfo from "../components/randomInfo/RandomInfo";
import CharactersBody from "../components/charactersBody/CharactersBody";

class Characters extends Component {
  state = {};

  render() {
    return (
      <>
        <RandomInfo />
        <CharactersBody {...this.props} />
      </>
    );
  }
}

export default Characters;
