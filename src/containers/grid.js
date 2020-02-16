import { connect } from 'react-redux';
import Grid from '../components/grid';

const mapStateToProps = ({ pokemons = [] }) => ({ pokemons });

export default connect(mapStateToProps)(Grid);