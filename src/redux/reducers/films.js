const initialState = {
  films: [],
  fetchStatus: 0
};

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FILMS_SUCCESS":
      return { films: [...action.payload], fetchStatus: action.fetchStatus };
    case "GET_FILSM_REQUEST":
      return { ...state, fetchStatus: action.fetchStatus };
    case "NOT_FOUND":
      return { ...state, fetchStatus: action.fetchStatus };
    default:
      return state;
  }
}
