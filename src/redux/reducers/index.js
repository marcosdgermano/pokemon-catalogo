import { combineReducers } from 'redux';
import cart from './cart';
import pokemon from './pokemon';
import pokemons from './pokemons';

export default combineReducers({ pokemon, pokemons, cart });