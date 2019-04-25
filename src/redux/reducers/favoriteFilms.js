import {
  SET_FAVORITE_FILMS,
  UPDATE_FAVORITE_FILMS
} from "../constants/constants";

const initialState = {
  favoritFilms: []
};

export function favoriteFilmsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE_FILMS:
      return {
        favoritFilms: [...action.payload]
      };
    case UPDATE_FAVORITE_FILMS:
      return {
        favoritFilms: [...action.payload]
      };
    default:
      return state;
  }
  return state;
}
