const initialState = [];

export function filmReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILMS":
      return [...action.payload];
    default:
      return state;
  }
}
