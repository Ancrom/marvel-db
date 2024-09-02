import { Component } from "react";
import "./../../style/button.scss";
import "./findChar.scss";

class FindChar extends Component {
  state = {
    inputValue: "",
  };

  findChar = () => {
    const char = this.props.charList.filter(
      (item) => item.name.toLowerCase().indexOf(this.state.inputValue) > -1
    );
		console.log(char);

  };

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {

    return (
      <div className="find-char">
        <div className="find-char__title">Or find a character by name:</div>
        <div className="find-char__input-wrapper">
          <input
            type="text"
            className="find-char__input"
            placeholder="Enter name"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button className="find-char__button button" onClick={this.findChar}>
            find
          </button>
        </div>
      </div>
    );
  }
}

export default FindChar;
