import {injectReducer} from '../../store/reducers';

const list = (store) => ({
  path: 'news',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewsList = require('./components/List/List').default
      const reducer = require('./reducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, {key: 'news', reducer})

      /*  Return getComponent   */
      cb(null, NewsList)

      /* Webpack named bundle   */
    }, 'news')
  }
})


const create = (store) => ({

  path: 'news/create',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Create = require('./components/Create/Create').default
      /*  Return getComponent   */
      cb(null, Create)

      /* Webpack named bundle   */
    }, 'newsCreate')
  }

})

const update = (store) => ({

  path: 'news/update/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Create = require('./components/Update/Update').default
      /*  Return getComponent   */
      cb(null, Create)

      /* Webpack named bundle   */
    }, 'newsCreate')
  }

})

export default { create, list, update }

