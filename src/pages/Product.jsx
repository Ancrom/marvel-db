import { Component } from "react";
import ProductBody from "../components/productBody/ProductBody";

class Character extends Component {
  state = {};

  render() {
		const props = this.props;
    return (
      <>
        <ProductBody {...props}/>
      </>
    );
  }
}

export default Character;
