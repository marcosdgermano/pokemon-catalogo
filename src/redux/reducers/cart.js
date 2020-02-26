import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return _.concat(state, [action.payload]);
    case 'REMOVE_FROM_CART':
      return state.filter(element => element !== action.payload);
    case 'CLEAN_CART':
      return [];
    default:
      return state;
  }
};
