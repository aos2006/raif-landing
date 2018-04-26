import * as types from './constants';
import defaultState from './model';

const ApiReporter = (state = defaultState, action) => {
  const { payload, type } = action;
  console.log(type);
  switch (type) {
    case types.HIDE_REPORTER:
      return state
        .set('isError', false)
        .set('status', null)
        .set('message', null);
    case types.SHOW_REPORTER:
      return state
        .set('isError', true)
        .set('status', payload.status)
        .set('message', payload.message);
    default:
      return state;
  }
};

export default ApiReporter;
