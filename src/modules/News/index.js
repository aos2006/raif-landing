export { default as NewsCreate } from './components/Create/Create';
export { default as NewsUpdate } from './components/Update/Update';
export { default as columns } from './columns';

import * as types from './actionTypes';
import reducer from './reducer';
import routes from './routes';

export default { types, reducer, routes }
