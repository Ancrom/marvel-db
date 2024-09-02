import { Component } from "react";
import Banner from "../banner/Banner";
import ComicsList from "../comicsList/ComicsList";
import "./comicsBody.scss";

class ComicsBody extends Component {
  componentDidMount() {
    window.scrollTo({ top: this.props.scrollY, behavior: "smooth" });
  }
  render() {
    return (
      <div className="comics-body">
        <div className="comics-body__container container">
          <Banner />
          <ComicsList {...this.props} />
        </div>
      </div>
    );
  }
}

export default ComicsBody;
