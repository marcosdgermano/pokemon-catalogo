import { connect } from 'react-redux';
import Cart from '../components/cart';

const mapStateToProps = ({ cart }) => ({ pokemons: cart });

export default connect(mapStateToProps)(Cart);