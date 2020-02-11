import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../redux/actions';
import Card from '../containers/card';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemon();
  }

  render () {
    return <Card />;
  }
};

export default connect(null, { fetchPokemon })(App);