const combineChanges = changes => (curState, action) => changes.reduce(
  (state, reducer) => reducer(state, action),
  curState,
);

export default combineChanges;
