import { Component } from "react";
import "./comicsCard.scss";

class ComicsCard extends Component {
	
  render() {
    const { comics } = this.props;
    return (
      <div className="comics-card">
        <div className="comics-card__image hasBg">
          <img src={comics.thumbnail} alt={comics.title} />
        </div>
        <div className="comics-card__title text">{comics.title}</div>
        <div className="comics-card__price">{comics.price}</div>
      </div>
    );
  }
}

export default ComicsCard;
