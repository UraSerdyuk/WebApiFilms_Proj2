import { SET_FAVORITE_FILMS }  from '../../constants/constants'
import status from '../../status/status'

export function setFavoriteFilms(arr) {
  // console.log(arr);
  return {
    type: SET_FAVORITE_FILMS,
    payload: arr,
    fetchStatusFavorite: status.SUCCESS,
  };
}
