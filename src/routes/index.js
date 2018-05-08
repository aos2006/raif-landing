// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import News from 'modules/News';
import { Router, Reducer, Actions } from 'modules/CrudGenerator';
import { createReducer } from '../modules/utils';
import * as types from '../modules/News/actionTypes';
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */
import config from './config';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : config.reduce((acc, item) => {
    const keys = ['list', 'create', 'update'];
    keys.forEach(key => acc.push(item[key](store)));
    return acc;
  }, []),
})


/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
