import { fromJS } from 'immutable';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_REQUEST':
      return state;
    case 'FETCH_POKEMON':
      return { ...state, ...action.payload };
    case 'FETCH_POKEMON_ERROR':
      return state;
    default:
      return state;
  }
};
