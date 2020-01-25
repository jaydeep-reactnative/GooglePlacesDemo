import {LOCATION_REQUEST, LOCATION_SUCCESS, LOCATION_FAILURE} from '../types';
import Reduxer, {immutableMerge} from '../Reduxer';

export const INITIAL_STATE = Object.freeze({
  fetching: false,
  location: null,
  error: null,
});

const request = state =>
  immutableMerge(state, {
    fetching: true,
    error: null,
    location: null,
  });

const success = (state, action) =>
  immutableMerge(state, {
    fetching: false,
    error: null,
    location: action.payload,
  });

const failure = (state, action) =>
  immutableMerge(state, {
    fetching: false,
    error: action.payload,
    location: null,
  });

export default Reduxer(INITIAL_STATE, {
  [LOCATION_REQUEST]: request,
  [LOCATION_SUCCESS]: success,
  [LOCATION_FAILURE]: failure,
});
