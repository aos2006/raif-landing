import 'isomorphic-fetch';
import * as types from './constants';

const handling = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }
  let error = new Error();
  error.resp = resp;
  throw error;
};

const parse = json => {
  try {
    console.log(json);
    return json.json();
  } catch(e) {
    return null;
  }
};

const api = ({ url, params }) => {
  return fetch(url, {
    ...params,
   body: JSON.stringify(params.body) || null,
    headers: {
      // 'Access-Control-Allow-Headers': 'X-Requested-With',.\\\
      'Content-Type': 'application/json',
      ...params.headers,
    },
  })
    .then(handling)
    .then(parse)
    .catch(e => console.log(e))
}

const parametred = method => ({ url, params }) =>
  api({ url, params: { ...params, method } });

export const hideReporter = () => ({
  type: types.HIDE_REPORTER,
  payload: {},
});

export default {
  get: parametred('GET'),
  post: parametred('POST'),
  put: parametred('PUT'),
  delete: parametred('DELETE'),
};
