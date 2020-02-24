import _ from 'lodash';

export function getPokemonImage(id) {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

function formatPokemonNumber(url) {
  return url.match('\/[0-9]+\/')[0].replace(/[/]/g, '');
}

function formatPokemon(pokemon) {
  return {
    name: pokemon.pokemon.name,
    url: pokemon.pokemon.url,
    id: formatPokemonNumber(pokemon.pokemon.url),
    price: (Math.random() * (1000)) + 100,
    slot: pokemon.slot,
  };
}

export function formatPokemonsList(pokemons = []) {
  let list = [];
  
  for(var i = 0; i < pokemons.length; i++) {
    list = _.concat(list, formatPokemon(pokemons[i]));
  }

  console.log('list', list);
  return list;
}