import * as meta from 'modules/constants';
import * as types from './actionTypes';

export const fetchProjects = () => ({
  type: types.req_start,
  name: types.NAME,
  url: `${meta.API_URL}/misc/getProjects`,
  method: 'post',
})
