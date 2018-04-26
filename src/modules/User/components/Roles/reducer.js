import {createReducer, taggedReducer} from 'modules/utils';
import * as types from './actionTypes';
import {Map} from 'immutable';

const loginState = new Map({
  isLoading: false,
  result: [1],
  entities: {
    '1': {
      list: [
        {value: 'Admin', id: 1, active: false},
        {value: 'aleshka', id: 2},
        {value: 'aleshka', id: 3},
        {value: 'aleshka', id: 4},
        {value: 'aleshka', id: 5},
        {value: 'aleshka', id: 6}
      ]
    }
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

