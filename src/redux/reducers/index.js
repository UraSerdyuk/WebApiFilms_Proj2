import { combineReducers } from "redux";

import { inputReducer } from "./inputValue";
import { filmReducer } from "./films";
import { favoriteFilmsReducer } from "./favoriteFilms";

export const rootReducer = combineReducers({
  films: filmReducer,
  favoritFilms: favoriteFilmsReducer,
  inputValue: inputReducer
});
