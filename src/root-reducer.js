import { combineReducers } from 'redux';
import { appReducer as app } from './components/App/AppReducer';
import { filterReducer as filter } from './components/Filter/FilterReducer';
import { moveListReducer as movieList } from './components/MovieList/MoveListReducer';

export const rootReducer = combineReducers({
  app,
  filter,
  movieList,
});
