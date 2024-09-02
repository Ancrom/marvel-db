import { Component } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../banner/Banner";
import "./productBody.scss";

class ProductBody extends Component {
  state = {};
  render() {
    const comics = this.props.comicsSelected;
    return (
      <div className="product-body">
        <div className="product-body__container container">
          <Banner />
          <div className="product-body__inner">
            <div className="product-body__image hasBg">
              <img src={comics.thumbnail} alt={comics.title} />
            </div>
            <div className="product-body__content">
              <h3 className="product-body__title title">{comics.title}</h3>
              <p className="product-body__text">{comics.description}</p>
              <p className="product-body__text">{comics.pageCount} pages</p>
              <p className="product-body__text">Language: {comics.language}</p>
              <div className="product-body__price">{comics.price}</div>
            </div>
            <NavLink to="/comics" className="product-body__link">
              Back&nbsp;to&nbsp;all
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBody;
