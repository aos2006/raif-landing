import {all} from 'redux-saga/effects';
import Api from 'modules/Api';
import Notify from 'modules/Notify';
// import { Login } from 'modules/User';


export default function* rootSaga() {
  yield all([
    Api.saga(),
    Notify.saga(),
    // Login.saga(),
  ])
}
