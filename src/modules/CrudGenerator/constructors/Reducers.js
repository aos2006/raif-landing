import { createReducer, taggedReducer } from 'modules/utils';
import { Map, fromJS } from 'immutable';
import schema from '../schema';



const fetchSuccess = (state, action, key) => {
  const { payload } = action;
  const { entities, result } = schema(payload[key]);
  return state
    .setIn(['entities'], entities.list)
    .setIn(['result'], result)
    .set('isLoaded', true)
    .set('isLoading', false)
}

const fetchStart = (state) => {
  console.log(state);
  return state.set('isLoading', true);
}

const createStart = (state, action) => {
  return state.setIn(['create', 'isLoading'], true)
}

const createSuccess = (state, action) => {
  return state.setIn(['create', 'isLoading'], false);
}

const getSingle = (state, action) => {
  console.log(state, action);
  return state;
}

const getSingleSuccess = (state, action) => {
  const { payload } = action;
  return state
    .setIn(['update', 'isLoaded'], true)
    .updateIn(['update', 'initialValues'], obj => ({
      ...payload,
    }))
}

class Reducers {
  constructor({
                name,
                listKey,
                defaultState = new Map({
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
                })
  }) {
    this.name = name
    this.listKey = listKey;
    this.defaultState = defaultState
    this.types = [
      {
        start: [`${this.name}_request_start`, fetchStart],
        success: [`${this.name}_request_success`, (state, action) => fetchSuccess(state, action, this.listKey ? this.listKey : this.name)],
      },
      {
        start: [`${this.name}_create_request_start`, createStart],
        success: [`${this.name}_create_request_success`, createSuccess],
      },
      {
        start: [`${this.name}_single_request_start`, getSingle],
        success: [`${this.name}_single_request_success`, getSingleSuccess],
      },
      {
        start: [`${this.name}_testReq`, getSingle],
        success: [`${this.name}_testReq_request_success`, getSingleSuccess],
      }

    ]
  }

  all() {
    const result = this.types.reduce((acc, val) => {
      const { start, success } = val;
      return {
        ...acc,
        [start[0]]: start[1],
        [success[0]]: success[1],
      }
    }, {});

    return createReducer(this.defaultState, result)
  }
}

export default Reducers;
