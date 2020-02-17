import { connect } from 'react-redux';
import Card from '../components/card';
import { addToCart } from '../redux/actions/cart';

export default connect(null, { addToCart })(Card);