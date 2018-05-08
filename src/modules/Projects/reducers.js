import { createReducer, taggedReducer } from 'modules/utils';
import * as types from './actionTypes';
import { Map } from 'immutable';
import schema from './schema';

const defaultState = new Map({
  result: [],
  entities: {},
})

const reqSuccess = (state, action) => {
  const { payload } = action;
  const normalized = schema(payload);
  const { result, entities } = normalized;
  return state
    .set('result', result)
    .set('entities', entities.list)
};

export default createReducer(defaultState, {
  [types.req_success]: reqSuccess,
});
