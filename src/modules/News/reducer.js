import {createReducer, taggedReducer} from 'modules/utils';
import * as types from './actionTypes';
import Api from 'modules/Api';
import { Map } from 'immutable';
import schema from './schema';

export const defaultState = new Map({
  isLoaded: false,
  result: [],
  entities: {},
  update: new Map({
    initialValues: new Map({}),
    isLoading: false,
    isLoaded: false,
  }),
  create: new Map({
    isLoading: false,
  })
});


const fetchNews = (state, action) => {
  const { payload } = action;
  const { entities, result } = schema(payload.news);
  return state
    .setIn(['entities'], entities.news)
    .setIn(['result'], result)
    .set('isLoaded', true)
    .set('isLoading', false)
}

const fetchStart = (state) => {
  return state.set('isLoading', true);
}

const createStart = (state, action) => {
  return state.setIn(['create', 'isLoading'], true)
}

const createSuccess = (state, action) => {
  return state.setIn(['create', 'isLoading'], false);
}

const getSingle = (state, action) => {
  return state;
}

const getSingleSuccess = (state, action) => {
  const { payload } = action;
  return state
    .setIn(['update', 'isLoaded'], true)
    .updateIn(['update', 'initialValues'], obj => ({
      ...payload,
      category: 1,
      language: 2,
    }))
}

export default createReducer(defaultState, {
  [types.FETCH_NEWS_LIST_SUCCESS]: fetchNews,
  [types.FETCH_NEWS_LIST]: fetchStart,
  [types.CREATE_NEWS_REQ]: createStart,
  [types.CREATE_NEWS_SUCCESS]: createSuccess,
  [types.SINGLE_NEWS_REQ]: getSingle,
  [types.SINGLE_NEWS_SUCCESS]: getSingleSuccess,
});

