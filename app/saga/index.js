import {all, takeLatest} from 'redux-saga/effects';
import {LOCATION_REQUEST} from '../redux/types';
import API from '../services/Api';
import {getLocation} from './Locations';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const apiLocation = API.location();

export default function* rootSaga() {
  yield all([takeLatest(LOCATION_REQUEST, getLocation, apiLocation)]);
}
