import { combineReducers } from 'redux';
import { reducer as town } from './town';
import { reducer as filters } from './filters';

export default combineReducers({
  town,
  filters,
});
