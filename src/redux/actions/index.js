import { pokeApi } from '../../apis';

export const fetchPokemon = () => async dispatch => {
  dispatch({ type: 'FETCH_POKEMON_REQUEST' });

  try {
    const response = await pokeApi.get('pokemon/1/');

    dispatch({ type: 'FETCH_POKEMON', payload: response.data })

  } catch (e) {
    dispatch({ type: 'FETCH_POKEMON_ERROR', error: e });
  }
}