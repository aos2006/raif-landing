import { NAME } from './constants';

export const getState = state => state[NAME];

export const getModel = state => ({
  status: state[NAME].get('status'),
  message: state[NAME].get('message'),
  show: state[NAME].get('isError'),
});

export default { getModel };
