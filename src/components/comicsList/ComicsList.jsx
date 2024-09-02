import { Component } from "react";
import { NavLink } from "react-router-dom";
import ComicsCard from "../comicsCard/ComicsCard";
import Spinner from "../spinner/Spinner";
import "./comicsList.scss";

class ComicsList extends Component {
  render() {
    const { comicsList, selectItem, updateData, isLoading } = this.props;

    const comicsCards = comicsList.map((comics) => (
      <NavLink
        to={`/comics/product/${comics.id}`}
        key={comics.id}
        tabIndex={0}
        className={"comics-list__link"}
        onClick={() => {
          selectItem(comics.id, "comics");
          window.scrollTo(0, 0);
        }}
        onFocus={() => selectItem(comics.id, "comics")}
      >
        <ComicsCard comics={comics} selectItem={selectItem} />
      </NavLink>
    ));

    const comicsButton = (
      <button
        className="comics-list__button button"
        onClick={() => updateData("comics", 8)}
      >
        Load more
      </button>
    );

    console.log(this.myRef);

    return (
      <div className="comics-list">
        <div className="comics-list__wrapper">{comicsCards}</div>
        {isLoading ? <Spinner /> : comicsButton}
      </div>
    );
  }
}

export default ComicsList;
