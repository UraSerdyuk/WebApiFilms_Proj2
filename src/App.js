import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles/App.css";
import status from './redux/status/status'

//components
import AppBar from "./components/AppBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import GuttersGrid from "./components/GuttersGrid";
import NotFound from "./components/NotFound";
import Load from "./components/Load";
import Favorite from "./components/Favorite";
//actions
import { setInputValue } from "./redux/actions/InputAction";
import { fetchFilms } from "./redux/actions/FilmAction/FilmsAction";
import { setFavoriteFilms } from "./redux/actions/favoriteFilm/FavoriteFilmsAction";

class App extends Component {
  state = {
    handelsMenu: false
  };
  //проброс state в меню
  handel = () => {
    this.setState({ handelsMenu: true });
  };
  //скрыть боковое меню
  getToogle = e => {
    this.setState({ handelsMenu: e });
  };

  getVaue = e => {
    //зипись в стор
    this.props.setInputValueAction(e.currentTarget.value);
    //запись в локал сторедж
    localStorage.setItem("inputValue", e.currentTarget.value);
  };

  componentDidMount() {
    //если нету ключа , добавляем
    if (!localStorage.getItem("inputValue")) {
      localStorage.setItem("inputValue", "");
    }

    if (!localStorage.getItem("dataFavorite")) {
      localStorage.setItem("dataFavorite",JSON.stringify([]));
    }

    //запись в стор значение инпута
    this.props.setInputValueAction(localStorage.getItem("inputValue"));

    //поиск при самом старте
    const value = localStorage.getItem("inputValue");
    this.props.fetchFilmsAction(value);

    this.props.setFavoriteFilmsAction(
      JSON.parse(localStorage.getItem("dataFavorite"))
    );
  }

  // поиск сериала
  StartSearch = e => {
    console.log("sterat search");
    this.props.fetchFilmsAction(this.props.inputValue);
  };

  enter = e => {
    console.log(e);
    if (e.which === 13) {
      this.props.fetchFilmsAction(this.props.inputValue);
    }
  };

  showFavoriteFilms = () => {
    console.log("pressed show favorite");
    // запись в поле faviriteFilms
    this.props.setFavoriteFilmsAction(
      JSON.parse(localStorage.getItem("dataFavorite"))
    );
  };

  render() {
    const {
      inputValue,
      films,
      fetchStatus,
      faviriteFilms,
      fetchStatusFavorite
    } = this.props;

    // не найдено
    if ( fetchStatus === status.NOT_FOUND ) {
      return (
        <div className="App">
          <AppBar
            handel={this.handel}
            getVaue={this.getVaue}
            setInputValue={inputValue}
            StartSearch={this.StartSearch}
            enter={this.enter}
          />
          <TemporaryDrawer
            handelsMenu={this.state.handelsMenu}
            getToogleDrawer={this.getToogle}
            getFavoriteFilms={this.showFavoriteFilms}
          />
          <NotFound />
        </div>
      );
    }

    if (fetchStatus === status.IDLE || fetchStatus === status.SUCCESS) {
      return (
        <div className="App">
          <AppBar
            handel={this.handel}
            getVaue={this.getVaue}
            setInputValue={inputValue}
            StartSearch={this.StartSearch}
          />
          <TemporaryDrawer
            handelsMenu={this.state.handelsMenu}
            getToogleDrawer={this.getToogle}
            getFavoriteFilms={this.showFavoriteFilms}
          />

          <Switch>
            <Route
              exact
              path="/"
              component={ GuttersGrid } 
            />
            <Route
              path="/favorite"
              component={() => <Favorite list={faviriteFilms} />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      );
    }

    //прелоадер
    if ( fetchStatus === status.REQUEST || true ) {
      return (
        <div className="App">
          <Load />
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  // console.log(store); // посмотрим, что же у нас в store?
  return {
    films: store.films.films,
    faviriteFilms: store.favoritFilms.favoritFilms,
    inputValue: store.inputValue,
    fetchStatus: store.films.fetchStatus,
    fetchStatusFavorite: store.favoritFilms.fetchStatusFavorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFilmsAction: string => dispatch(fetchFilms(string)),
    setInputValueAction: string => dispatch(setInputValue(string)),
    setFavoriteFilmsAction: arr => dispatch(setFavoriteFilms(arr))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
