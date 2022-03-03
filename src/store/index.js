import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers = process.env.NODE_ENV !== 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const initStore = (initialState = {}) => configureStore(initialState);

export const wrapper = createWrapper(() => initStore());

export default initStore;
