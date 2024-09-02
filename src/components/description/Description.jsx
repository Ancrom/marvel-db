import { Component } from "react";
import "./description.scss";

class Description extends Component {
  renderComicsList(comics) {
    if (!comics.length) {
      return "No comics found";
    }

    return comics.slice(0, 10).map((item) => {
      const { name } = item;
      return (
        <li className="desc__list-item" key={name}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { charSelected } = this.props;
    const { name, description, homepage, wiki, comics } = charSelected;

    return (
      <div className="desc">
        <div className="desc__wrapper">
          {charSelected.id ? (
            <>
              <div className="desc__header">
                <div className="desc__image hasBg">
                  <img src={charSelected.thumbnail} alt={name} />
                </div>
                <div className="desc__header-inner">
                  <h3 className="desc__title title">{name}</h3>
                  <div className="desc__buttons">
                    <a
                      href={homepage}
                      target="blank"
                      className="desc__button button"
                    >
                      homepage
                    </a>
                    <a
                      href={wiki}
                      target="blank"
                      className="desc__button button button--grey"
                    >
                      wiki
                    </a>
                  </div>
                </div>
              </div>
              <p className="desc__text text">
                {description || "There is no description for this character :("}
              </p>
              <h4 className="desc__subtitle">Comics:</h4>
              <ul className="desc__list">{this.renderComicsList(comics)}</ul>
            </>
          ) : (
            "Please select a character"
          )}
        </div>
      </div>
    );
  }
}

export default Description;
