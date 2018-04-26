import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from './constants';
import api from './actions';
// The watcher: watch actions and coordinate worker tasks

function* fetch({ url, params, method = 'get', name = 'NOTHING_TYPE' }) {
  try {
    // yield put({ type: `${name}_${types.REQUEST_START}`, name });
    const resp = yield call(api[method.toLowerCase()], { url, params });
    console.log(resp);
    yield put({
      type: types.REQUEST_SUCCESS,
      name,
      payload: {
        ...resp,
      },
    });
  } catch (error) {
    yield put({
      type: types.REQUEST_FAIL,
      name,
      payload: { ...error.resp },
    });
  }
}

export default function* watchFetchRequests() {
  yield takeEvery(types.REQUEST_START, fetch);
}
