import { call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';

// The watcher: watch actions and coordinate worker tasks

function *watchSuccessReqs (action) {
  if (action.meta.showNotify) {
    notification['success']({
      duration: 1.5,
      message: action.meta.title || 'Заголовок не задан, но что-то создалось',
    })
  }}

export default function * watchFetchRequests () {
  yield takeEvery(action => action.type.includes('request_success'), watchSuccessReqs);
}
