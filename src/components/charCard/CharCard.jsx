import { Component } from "react";

import "./../../style/title.scss";
import "./charCard.scss";

class CharCard extends Component {
  state = {};

  scrollToDesc = () => {
    const descElem = document.querySelector(".desc");
    const scrollTo = window.scrollY + descElem.getBoundingClientRect().y;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  render() {
    const { char, selectItem } = this.props;

    return (
      <div
        className="char-card"
        tabIndex={0}
        onClick={() => {
          selectItem(char.id);
          this.scrollToDesc();
        }}
        onFocus={() => {
          selectItem(char.id);
        }}
      >
        <div className="char-card__image hasBg">
          <img src={char.thumbnail} alt={char.name} />
        </div>
        <div className="char-card__body">
          <h3 className="char-card__title title">{char.name}</h3>
        </div>
      </div>
    );
  }
}

export default CharCard;
