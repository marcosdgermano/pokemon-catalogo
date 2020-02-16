import { connect } from 'react-redux';
import Card from '../components/card';
import { addToCart } from '../redux/actions';

export default connect(null, { addToCart })(Card);