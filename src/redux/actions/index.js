import { pokeApi } from '../../apis';
import { formatPokemonsList } from '../../helpers/pokemon';

export const fetchPokemon = () => async dispatch => {
  dispatch({ type: 'FETCH_POKEMON_REQUEST' });

  try {
    const response = await pokeApi.get('pokemon/1/');

    dispatch({ type: 'FETCH_POKEMON', payload: response.data })

  } catch (e) {
    dispatch({ type: 'FETCH_POKEMON_ERROR', error: e });
  }
}

export const fetchPokemons = () => async dispatch => {
  dispatch({ type: 'FETCH_POKEMONS_REQUEST' });

  try {
    const response = await pokeApi.get('pokemon');

    dispatch({ type: 'FETCH_POKEMONS', payload: formatPokemonsList(response.data.results) })

  } catch (e) {
    console.log('error >>>>>>>', e);
    dispatch({ type: 'FETCH_POKEMONS_ERROR', error: e });
  }
}