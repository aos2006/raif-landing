import * as types from './actionTypes';

export const login = ({name, password}) => {
  return {
    type: types.LOGIN_REQ,
    name: types.NAME,
    url: 'http://127.0.0.1:8000/login/',
    method: 'post',
    isMock: true,
    mockData: {
      payload: {
        token: 'alksdjfkasjdfkajsdkfjaksjdf',
      }
    },
    params: {
      body: {
        name,
        password,
      }
    }
  }
}

export const checkToken = () => ({
  type: types.CHECK_TOKEN,
})
