import { combineReducers } from 'redux'
import locationReducer from './location';
import Project from 'modules/Projects';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    [Project.types.NAME]: Project.reducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
