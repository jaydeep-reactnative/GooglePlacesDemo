import {combineReducers} from 'redux';

// Imports: Reducers
import locationsReducer from './Locations';

// Redux: App Reducer
const appReducer = combineReducers({
  locations: locationsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

// Exports
export default rootReducer;
