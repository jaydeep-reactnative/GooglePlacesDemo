import {createStore, applyMiddleware, compose} from 'redux';
import Rehydration from '../services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import {persistStore, persistReducer} from 'redux-persist';
import Config from '../Config/DebugConfig';
import createSagaMiddleware from 'redux-saga';
import ScreenTracking from './ScreenTrackingMiddleware';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import rootReducer from './reducers/index';
import rootSaga from '../saga/index';

/* ------------- Redux Configuration ------------- */

const middleware = [];
const enhancers = [];

/* ------------- Navigation Middleware ------------ */
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
middleware.push(navigationMiddleware);

/* ------------- Analytics Middleware ------------- */
middleware.push(ScreenTracking);

/* ------------- Saga Middleware ------------- */

const sagaMonitor = Config.useReactotron
  ? console.tron.createSagaMonitor()
  : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
middleware.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);

// if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
const createAppropriateStore = Config.useReactotron
  ? console.tron.createStore
  : createStore;
const store = createAppropriateStore(
  persistedReducer,
  composeEnhancers(...enhancers),
);

// configure persistStore and check reducer version number
if (ReduxPersist.active) {
  Rehydration.updateReducers(store);
}

// kick off root saga
let sagasManager = sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export default {
  store,
  persistor,
  sagasManager,
  sagaMiddleware,
};
