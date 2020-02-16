import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemons from './pokemons';

export default combineReducers({ pokemon, pokemons });