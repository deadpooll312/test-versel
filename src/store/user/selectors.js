import { createSelector } from 'reselect';

const selectState = state => state.user;

export const makeSelectSignInData = createSelector(selectState, state => state?.getIn(['signIn', 'data']));

export const makeSelectSignInLoading = createSelector(selectState, state => state?.getIn(['signIn', 'fetching']));

export const makeSelectSignUpError = createSelector(selectState, state => state?.getIn(['signIn', 'error']));
