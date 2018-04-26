import { default as LoginUI } from './Login';

import * as types from './actionTypes';
import reducer from './reducer';
import saga from './sagas';

export default { types, reducer, saga, LoginUI };
