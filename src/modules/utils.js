export const createReducer = (initialState, handlers) => function reducer(state = initialState, action) {
  if(Array.isArray(handlers)) {
    handlers
      .filter(handler => handler[0] === action.type)
      .forEach(handler => handler[1](state, action))
    return null;
  }
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};


export const taggedReducer = (reducer, rName) => (state, action) => {
  const { name } = action;
  const isInitializationCall = state === undefined;
  if (name !== rName && !isInitializationCall) return state;
  return reducer(state, action);
};


export const calculateOffset = (page, count) => count * (page - 1);
