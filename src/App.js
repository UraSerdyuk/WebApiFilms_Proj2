import React, { Component } from "react";
import "./styles/App.css";
import AppBar from "./components/AppBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import { connect } from "react-redux";
//action
import { setFilms } from "./redux/actions/FilmsAction";
import { setInputValue } from "./redux/actions/InputAction";
class App extends Component {
  handel = () => {};
  getVaue = e => {
    this.props.setInputValueAction(e.currentTarget.value);
  };

  componentDidMount() {
    if (localStorage.getItem("inputValue")) {
      localStorage.setItem("inputValue", "");
    }
    let arr = [1, 2, 3, 4, 5];
    this.props.setFilmsAction(arr);
  }
  render() {
    return (
      <div className="App">
        <AppBar handel={this.handel} getVaue={this.getVaue} />
        <TemporaryDrawer />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    films: store.films,
    faviriteFilms: store.faviriteFilms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilmsAction: arr => dispatch(setFilms(arr)),
    setInputValueAction: string => dispatch(setInputValue(string))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
