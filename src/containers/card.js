import { connect } from 'react-redux';
import Card from '../components/card';
import { getPokemonImage } from '../helpers/pokemon';

const mapStateToProps = ({pokemon}) => {
  return { 
    id: pokemon.id,
    name: pokemon.name,
    image: getPokemonImage(pokemon.id),
  };
}

export default connect(mapStateToProps)(Card);