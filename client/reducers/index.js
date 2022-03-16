import { combineReducers } from 'redux';
import placeholderReducer from './placeholderReducer';

const reducers = combineReducers({
  placeholder: placeholderReducer,
});

export default reducers;