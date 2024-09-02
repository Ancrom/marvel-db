import { Component } from "react";
import CharCard from "../charCard/CharCard";
import Spinner from "../spinner/Spinner";

import "./charList.scss";

class CharList extends Component {
  render() {
    const { charList, charOffset, selectItem, updateData, isLoading } =
      this.props;

    const charCards = charList.map((char) => (
      <CharCard char={char} key={char.id} selectItem={selectItem} />
    ));
 
    const listEnded = charOffset >= 1560 ? true : false;

    const charButton = (
      <button
        className="char-list__button button"
        onClick={() => updateData("char", 9)}
        style={{ display: listEnded ? "none" : "block" }}
      >
        Load more
      </button>
    );

    return (
      <div className="char-list">
        <div className="char-list__wrapper">{charCards}</div>
        {isLoading ? <Spinner /> : charButton}
      </div>
    );
  }
}

export default CharList;
