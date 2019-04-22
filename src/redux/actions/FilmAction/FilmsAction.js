import { GET_FILMS_SUCCESS } from "../../constants/constants";
import { GET_FILSM_REQUEST } from "../../constants/constants";
// import { NOT_FOUND } from '../../constants/constants'
import { ERROR } from "../../constants/constants";

export function fetchFilms(string) {
  return dispatch => {
    dispatch({
      type: GET_FILSM_REQUEST,
      fetchStatus: 1
    });
    fetch(`https://api.tvmaze.com/search/shows?q=${string}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        if (data.length === 0) {
          return dispatch({
            type: "NOT_FOUND",
            fetchStatus: 3
          });
        }
        dispatch({
          type: GET_FILMS_SUCCESS,
          payload: data,
          fetchStatus: 2
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          fetchStatus: -1
        });
      });
  };
}
