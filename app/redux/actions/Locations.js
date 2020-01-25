import {LOCATION_REQUEST, LOCATION_SUCCESS, LOCATION_FAILURE} from '../types';

export function locationRequest(payload) {
  return {
    type: LOCATION_REQUEST,
    payload,
  };
}

export function locationSuccess(payload) {
  return {
    type: LOCATION_SUCCESS,
    payload,
  };
}

export function locationFailure(payload) {
  return {
    type: LOCATION_FAILURE,
    payload,
  };
}
