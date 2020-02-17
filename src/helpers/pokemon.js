export function getPokemonImage(id) {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
}

export function formatPokemonPrice(price) {

}

export function formatPokemonsList(pokemons = []) {
  for(var i = 0; i < pokemons.length; i++) {
    pokemons[i].id = i+1;
    pokemons[i].price = (Math.random() * (1000)) + 100;
  }

  return pokemons;
}