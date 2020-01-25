import {call, put} from 'redux-saga/effects';
import {locationSuccess, locationFailure} from '../redux/actions/Locations';
import {getError} from '../services/Utils';

function* handleResponse(response) {
  if (response?.code === 200) {
    yield put(locationSuccess(response.data));
  } else {
    const error = yield call(getError, response);
    yield put(locationFailure(error));
  }
}

export function* getLocation(api, action) {
  const response = yield call(api.getLocation, action.payload);
  console.log('Response:: ', response);
  yield* handleResponse(response.data);
}
