import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from './constants';
import api from './actions';
// The watcher: watch actions and coordinate worker tasks
function getErrorData(data){
  return data.json().then(data => data);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* fetch({ url, params, method = 'get', name = 'NOTHING_TYPE', isMock = false, mockData = {}, type = '', meta = {} }) {
  try {
    const resp = yield call(api[method.toLowerCase()], { url, params })
    yield put({
      type: `${name}_request_success`,
      name,
      meta,
      payload: {
        ...resp,
      },
    })
  } catch (error) {
    console.log(error);
    let data = yield call(getErrorData, error.resp);
    yield put({
      type: `${name}_request_fail`,
      name,
      payload: {
        statusText: error.resp.statusText,
        ok: error.resp.ok,
        status: error.resp.status,
        data,
      },
    });
  }
}

export default function* watchFetchRequests() {
  yield takeEvery((action) => action.type.includes('request_start'), fetch);
}
