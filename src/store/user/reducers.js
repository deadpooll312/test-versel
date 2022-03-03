import { fromJS } from 'immutable';

import createReducer from 'utils/createReducer';
import { setStorage } from 'utils/storageHeplers';
import { generateRemoteRequestStore } from 'utils/requests';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './actions';

const initialState = fromJS({
  signIn: generateRemoteRequestStore(),
});

const setUserError = key => (state, action) => state.setIn([key, 'error'], action.payload);
const setSignInData = (state, action) => {
  setStorage('token', action.payload);
  return state.setIn(['signIn', 'data'], action.payload);
};

const setSignInFetching = value => state => state.setIn(['signIn', 'fetching'], value);


export default createReducer(initialState, {
  [SIGN_IN_REQUEST]: setSignInFetching(true),
  [SIGN_IN_SUCCESS]: [setSignInFetching(false), setSignInData],
  [SIGN_IN_FAILURE]: [setSignInFetching(false), setUserError('signIn')],
});
