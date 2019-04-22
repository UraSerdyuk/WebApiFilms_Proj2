const initialState = {
  favoritFilms: [],
  fetchStatusFavorite: 0
};

export function favoriteFilmsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FAVORITE_FILMS":
      return {
        favoritFilms: [...action.payload],
        fetchStatusFavorite: action.fetchStatusFavorite
      };
  }
  return state;
}
