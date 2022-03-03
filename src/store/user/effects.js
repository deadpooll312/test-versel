import { call, put, takeLatest, all } from 'redux-saga/effects';

import request from 'API';

import {
  SIGN_IN_REQUEST,
  signInSuccess,
  signInFailure,
} from './actions';


function* signIn(action) {
  try {
    const response = yield call(request.post, '/sign-in/', action.payload);
    yield put(signInSuccess(response.data));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* Saga() {
  yield all([
    takeLatest(SIGN_IN_REQUEST, signIn),
  ]);
}

export default Saga;
