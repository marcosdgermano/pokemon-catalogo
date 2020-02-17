import { connect } from 'react-redux';
import Cart from '../components/cart';
import { removeFromCart } from '../redux/actions/cart';

const cartSum = (pokemons = []) => {
  let sum = 0;

  pokemons.map(pokemon => sum = sum + pokemon.price);

  return sum;
}

const mapStateToProps = ({ cart }) => ({ pokemons: cart, sum: cartSum(cart) });

export default connect(mapStateToProps, { removeFromCart })(Cart);