import { fromJS } from 'immutable';

import createReducer from 'utils/createReducer';
import { setStorage } from 'utils/storageHeplers';
import { generateRemoteRequestStore } from 'utils/requests';

import {
  SIGN_IN_FETCHING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './actions';

const initialState = fromJS({
  signIn: generateRemoteRequestStore(),
});

// Sign In
const setSignInFetching = value => state => state.setIn(['signIn', 'fetching'], value);
const setSignInError = (state, action) => state.setIn(['signIn', 'error'], action.payload);
const setSignInData = (state, action) => {
  setStorage('token', action.payload);
  return state.setIn(['signIn', 'data'], action.payload);
};


export default createReducer(initialState, {
  [SIGN_IN_FETCHING]: setSignInFetching(true),
  [SIGN_IN_SUCCESS]: [setSignInFetching(false), setSignInData],
  [SIGN_IN_ERROR]: [setSignInFetching(false), setSignInError],
});
