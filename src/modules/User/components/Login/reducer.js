import {createReducer, taggedReducer} from 'modules/utils';
import * as types from './actionTypes';
import { Map } from 'immutable';

const loginState = new Map({
  isLoading: false,
  user: new Map({
    token: null,
  }),
  errors: new Map({
    password: null,
    name: null,
  })
})


const start = (state, action) => {
  return state.setIn(['isLoading'], true)
}

const success = (state, action) => {
  const {payload} = action;

  return state
    .setIn(['user', 'token'], payload.token)
    .setIn(['isLoading'], false)
}

const fail = (state, action) => {
  const {payload} = action;

  return state
    .set('isLoading', false)
    .set('errors', {
      password: payload.password,
      name: payload.name
    })
}


const updateToken = (state, action) => {
  const {payload} = action;
  return state.setIn(['user', 'token'], payload.token)
}

const logout = (state) => {
  return state.setIn(['user', 'token'], null)
}

export default createReducer(loginState, {
  [types.LOGIN_REQ]: start,
  [types.LOGIN_REQ_SUCCESS]: success,
  [types.LOGIN_REQ_FAIL]: fail,
  [types.SET_TOKEN]: updateToken,
  [types.LOGOUT]: logout,
});

