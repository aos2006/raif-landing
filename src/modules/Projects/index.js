export { default as Projects } from './Projects';
import * as types from './actionTypes';
import * as actions from './actions';
import reducer from './reducers';
import selectors from './selectors';

export default { types, reducer, actions, selectors };
