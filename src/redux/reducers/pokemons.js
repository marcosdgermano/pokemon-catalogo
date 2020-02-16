import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_REQUEST':
      return state;
    case 'FETCH_POKEMONS':
      return _.concat(state, [...action.payload])
    case 'FETCH_POKEMONS_ERROR':
      return state;
    default:
      return state;
  }
};
