import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../redux/actions';
import Grid from '../containers/grid';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render () {
    return <Grid />;
  }
};

export default connect(null, { fetchPokemons })(App);