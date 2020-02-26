export const addToCart = pokemon => (dispatch, getState) => {
  if (getState().cart.includes(pokemon)) {
    return null;
  }

  dispatch({ type: 'ADD_TO_CART', payload: pokemon });
}

export const removeFromCart = pokemon => dispatch => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: pokemon });
}

export const cleanCart = () => dispatch => {
  dispatch({ type: 'CLEAN_CART' });
}