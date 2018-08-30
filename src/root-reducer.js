import { combineReducers } from 'redux';
import { appReducer as app } from './components/App/AppReducer';

export const rootReducer = combineReducers({
  app,
});
