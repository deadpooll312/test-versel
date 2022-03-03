import { call, put, takeLatest, all } from 'redux-saga/effects';
import Router from 'next/router';

import request from 'API';

import { TOKEN } from 'config/storageKeys';
import { AUTH } from 'config/urls';

import { setStorage } from 'utils/storageHeplers';

import {
  SIGN_IN_FETCHING,
  signInSuccess,
  signInError,
} from './actions';

function* signIn(action) {
  try {
    const response = yield call(request.post, AUTH, action.payload);
    const { data } = response;
    yield put(signInSuccess(data));
    yield call(setStorage, TOKEN, data.token);
    yield call(Router.push, '/lk');
  } catch (error) {
    console.error(error);
    yield put(signInError(error));
  }
}

function* Saga() {
  yield all([
    takeLatest(SIGN_IN_FETCHING, signIn),
  ]);
}

export default Saga;
