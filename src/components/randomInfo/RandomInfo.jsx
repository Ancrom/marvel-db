import { Component } from "react";
import "./../../style/text.scss";
import "./../../style/title.scss";
import "./../../style/button.scss";
import "./../../style/hasBg.scss";
import "./../../style/container.scss";
import Spinner from "../spinner/Spinner";
import MarvelService from "../../services/MarvelService";
import "./randomInfo.scss";

class RandomInfo extends Component {
  state = {
    char: {},
    isLoading: false,
    error: false,
  };

  componentDidMount() {
		this.updateChar();
  }

  marvelService = new MarvelService();

  updateChar = async () => {
    try {
      this.setState({ isLoading: true });
      const char = await this.marvelService.getRandomCharacter();
      this.setState({
        char: {
          ...char,
          description:
            char.description.length > 190
              ? `${char.description.slice(0, 190)}...`
              : char.description,
        },
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  };

  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state.char;
    const { isLoading } = this.state;

    const randomInfoBtn = (
      <button className="cta__button button" onClick={this.updateChar}>
        Try it
      </button>
    );

    return (
      <div className="random-info">
        <div className="random-info__wrapper">
          <div className="random-info__container container">
            <div className="random-info__body">
              <div className="random-info__image hasBg">
                <img src={thumbnail} alt={name} />
              </div>
              <div className="random-info__content">
                <h2 className="random-info__title title">{name}</h2>
                <p className="random-info__text text">{description}</p>
                <div className="random-info__buttons">
                  <a
                    href={homepage}
                    target="blank"
                    className="random-info__button button"
                  >
                    homepage
                  </a>
                  <a
                    href={wiki}
                    target="blank"
                    className="random-info__button button button--grey"
                  >
                    wiki
                  </a>
                </div>
              </div>
            </div>
            <div className="random-info__cta cta">
              <div className="cta__text">
                Random character for today! <br /> Do you want to get to know
                him better?
              </div>
              <div className="cta__text">Or choose another one</div>
              {isLoading ? <Spinner /> : randomInfoBtn}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomInfo;
