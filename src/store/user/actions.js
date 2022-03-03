import createAction from 'utils/createAction';

export const SIGN_IN_FETCHING = 'SIGN_IN_FETCHING';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signInRequest = createAction(SIGN_IN_FETCHING);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
export const signInError = createAction(SIGN_IN_ERROR);
