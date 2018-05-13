import { call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import { toast } from 'react-toastify';

// The watcher: watch actions and coordinate worker tasks

function *watchSuccessReqs (action) {
    toast.success('Заявка успешно отправлена',{
      position: toast.POSITION_TOP_RIGHT,
    })();
  }

function * watchSuccessReqs (action) {
  toast.success('Заявка успешно отправлена', {
    position: toast.POSITION_TOP_RIGHT,
  })();
}

function * watchErrorReqs (action) {
  toast.error('Произошла ошибка', {
    position: toast.POSITION_TOP_RIGHT,
  });
}

export default function * watchFetchRequests () {
  yield takeEvery(action => action.type.includes('request_success'), watchSuccessReqs);
  yield takeEvery(action => action.type.includes('request_fail'), watchErrorReqs);
}
