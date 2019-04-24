export function setFavoriteFilms(arr) {
  // console.log(arr);
  return {
    type: "SET_FAVORITE_FILMS",
    payload: arr,
    fetchStatusFavorite: 5
  };
}
