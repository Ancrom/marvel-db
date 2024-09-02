import { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../../pages/Product";
import Characters from "../../pages/Characters";
import Comics from "../../pages/Comics";
import AppHeader from "../appHeader/AppHeader";
import MarvelService from "../../services/MarvelService";

import "./../../style/style.scss";

class App extends Component {
  state = {
    charOffset: 210,
    charList: [],
    charSelected: {},
    charCount: 0,
    charLoading: false,
    comicsOffset: 210,
    comicsList: [],
    comicsSelected: {},
    comicsCount: 0,
    comicsLoading: false,
    scrollY: 0,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.loadDataFromSessionStorage("char", 9);
    this.loadDataFromSessionStorage("comics", 8);
  }

  loadDataFromSessionStorage = (type, offsetStep) => {
    const savedList = sessionStorage.getItem(`${type}List`);
    const savedOffset = sessionStorage.getItem(`${type}Offset`);

    if (savedList && savedOffset) {
      this.setState({
        [`${type}List`]: JSON.parse(savedList),
        [`${type}Offset`]: parseInt(savedOffset, 10),
      });
    } else {
      this.updateData(type, offsetStep);
    }
  };

  updateData = async (type, offsetStep) => {
    const offsetKey = `${type}Offset`;
    const listKey = `${type}List`;
    const countKey = `${type}Count`;
    const loadKey = `${type}Loading`;
    const errorKey = `${type}Error`;

    const offset = this.state[offsetKey];
    const currentList = this.state[listKey];
    const count = this.state[countKey];

    this.setState({ [loadKey]: true, [errorKey]: null });

    try {
      const newList = await this.marvelService.getAllData(
        type === "char" ? "characters" : "comics",
        offsetStep,
        offset
      );

      const uniqueNewList = newList.filter(
        (newItem) => !currentList.some((item) => item.id === newItem.id)
      );

      const updatedList = [...currentList, ...uniqueNewList];

      this.setState(
        {
          [listKey]: updatedList,
          [offsetKey]: offset + offsetStep,
          [countKey]: count + offsetStep,
          [loadKey]: false,
        },
        () => {
          sessionStorage.setItem(listKey, JSON.stringify(updatedList));
          sessionStorage.setItem(offsetKey, offset + offsetStep);
        }
      );
    } catch (error) {
      console.error("Error updating data: ", error);
      this.setState({ [loadKey]: false, [errorKey]: error.message });
    }
  };

  selectItem = (id, type = "char") => {
    this.setState({
      [`${type}Selected`]: this.state[`${type}List`].find(
        (item) => item.id === id
      ),
      scrollY: window.scrollY,
    });
  };

  resetScroll = () => {
    this.setState({ scrollY: 0 });
  };

  render() {
    const {
      charList,
      charOffset,
      charSelected,
      charCount,
      charLoading,
      comicsList,
      comicsOffset,
      comicsSelected,
      comicsCount,
      comicsLoading,
      scrollY,
    } = this.state;
    const commonProps = {
      updateData: this.updateData,
      selectItem: this.selectItem,
      loadDataFromSessionStorage: this.loadDataFromSessionStorage,
    };

    return (
      <div className="App">
        <Router>
          <AppHeader resetScroll={this.resetScroll} />
          <Routes>
            <Route
              path="/"
              element={
                <Characters
                  charList={charList}
                  charOffset={charOffset}
                  charSelected={charSelected}
                  charCount={charCount}
                  isLoading={charLoading}
                  {...commonProps}
                />
              }
            />
            <Route
              path="/comics"
              element={
                <Comics
                  comicsList={comicsList}
                  comicsOffset={comicsOffset}
                  comicsSelected={comicsSelected}
                  comicsCount={comicsCount}
                  isLoading={comicsLoading}
                  scrollY={scrollY}
                  {...commonProps}
                />
              }
            />
            <Route
              path="/comics/product/:id"
              element={<Product comicsSelected={comicsSelected} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
