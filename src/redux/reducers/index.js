import { combineReducers } from 'redux'



import { inputReducer } from './inputValue'
import { filmReducer } from './films'
import { favoriteFilmsReducer } from './favoriteFilms'

export const rootReducer = combineReducers({
  films: filmReducer,
  favoriteFilms: favoriteFilmsReducer,
  inputValue: inputReducer,
})