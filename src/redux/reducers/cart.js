import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return _.concat(state, [action.payload])
    default:
      return state;
  }
};
