import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';
import history from 'src/store/history';
// import history from '../../history';
// The watcher: watch actions and coordinate worker tasks

function* watchLogin(action) {
  const { name, payload } = action;
  window.localStorage.setItem('token', payload.token);
  // history.push('/dashboard');
}

function* checkToken(action) {
  const token = window.localStorage.getItem('token');

  if(token !== null) {
    yield put({
      type: types.SET_TOKEN,
      payload: {
        token,
      }
    })

    if (history.location.pathname === '/login') {
      // history.push('/dashboard')
    }
  }
}

export default function*() {
  yield takeEvery(types.LOGIN_REQ_SUCCESS, watchLogin)
  yield takeEvery(types.CHECK_TOKEN, checkToken)
}
